import prisma from "../utils/prisma.js";
import { passwordHash, passwordCompareHash } from "../utils/bcryptPass.js";
import InsertDataService from "../services/InsertDataService.js";

class UserService {
  async create(data) {
    const { email, password } = data;

    if (!email || !password) {
      throw new Error("Email e senha são obrigatórios!");
    }

    try {
      const existingUser = await prisma.user.findUnique({
        where: { email },
      });

      if (existingUser) {
        throw new Error("Este email já existe");
      }
      const newEmail = email ? email.toLowerCase() : "";
      const passwordBlock = await passwordHash(password);

      // Criar usuário
      const newUser = await prisma.user.create({
        data: {
          email: newEmail,
          password: passwordBlock,
        },
      });

      // Verificar se é o primeiro usuário criado
      const userCount = await prisma.user.count();
      if (userCount === 1) {
        await InsertDataService.InsertDatas();
        console.log("Dados padrão inseridos com sucesso!");
      }

      return newUser;
    } catch (error) {
      throw new Error("⚠️ Erro ao tentar criar usuário: " + error.message);
    } finally {
      await prisma.$disconnect();
    }
  }

  async list() {
    try {
      const users = await prisma.user.findMany();
      return users;
    } catch (error) {
      throw new Error(`⚠️ Erro ao listar users : ${error.message}`);
    } finally {
      await prisma.$disconnect();
    }
  }

  async listEmail(email) {
    try {
      const user = await prisma.user.findFirst({
        where: { email },
        select: { id: true },
      });

      if (!user) {
        throw new Error("Usuário não encontrado!");
      }

      return user;
    } catch (error) {
      throw new Error(`⚠️ Erro ao listar user por email: ${error.message}`);
    } finally {
      await prisma.$disconnect();
    }
  }

  async updatePassword(data) {
    const { email, password, newPassword } = data;

    try {
      const user = await prisma.user.findUnique({
        where: { email },
      });

      if (!user) {
        throw new Error(
          "⚠️ Esse E-mail NÃO existe, tente seu E-mail cadastrado!!"
        );
      }

      if (!newPassword) {
        throw new Error("⚠️ A nova senha é obrigatória!");
      }

      const isPasswordValid = await passwordCompareHash(
        password,
        user.password
      );

      if (!isPasswordValid) {
        throw new Error("⚠️ Senha atual incorreta!");
      }

      const newPasswordHash = await passwordHash(newPassword);

      await prisma.user.update({
        where: { email },
        data: { password: newPasswordHash },
      });

      return { message: "Senha alterada com sucesso!" };
    } catch (error) {
      throw new Error("⚠️ Erro ao alterar senha do usuário: " + error.message);
    } finally {
      await prisma.$disconnect();
    }
  }

  async updateEmail(data) {
    const { email, newEmail } = data;
    try {
      const emailExistente = await prisma.user.findUnique({
        where: { email },
      });

      const newEmailExistente = await prisma.user.findUnique({
        where: { email: newEmail },
      });

      if (!emailExistente) {
        throw new Error(
          "⚠️ Esse E-mail NÃO existe, tente seu E-mail cadastrado!!"
        );
      }

      if (!newEmail) {
        throw new Error("⚠️ O novo e-mail é obrigatório!");
      }

      if (newEmailExistente) {
        throw new Error(
          "⚠️ Esse E-mail já FOI cadastrado, tente um E-mail não cadastrado!!"
        );
      }

      await prisma.user.update({
        where: { email },
        data: { email: newEmail },
      });

      return { message: "E-mail alterado com sucesso!" };
    } catch (error) {
      throw new Error("⚠️ Erro ao alterar E-MAIL do usuário: " + error.message);
    } finally {
      await prisma.$disconnect();
    }
  }

  async destroy(id) {
    try {
      await prisma.user.delete({
        where: { id },
      });
      // return { message: "Usuário deletado com sucesso!" };
    } catch (error) {
      throw new Error("⚠️ Erro ao deletar usuário: " + error.message);
    } finally {
      await prisma.$disconnect();
    }
  }
}

export default new UserService();
