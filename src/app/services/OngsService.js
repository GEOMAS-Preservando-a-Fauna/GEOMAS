import prisma from "../utils/prisma.js";
import OngsValidator from "../validators/OngsValidator.js";
import { passwordHash } from "../utils/bcryptPass.js";

class OngsServices {
  async create(data) {
    try {
      const {
        name,
        sigla,
        email,
        password,
        description,
        number,
        numberSecond,
        cidadeId,
        especies,
      } = data;

      await OngsValidator.validate(data);

      const passwordHashed = await passwordHash(password);

      const ong = await prisma.ongs.create({
        data: {
          name,
          email,
          sigla,
          password: passwordHashed,
          description,
          number,
          numberSecond,
          cidadeId,
          especies: {
            create:
              especies && especies.length > 0
                ? especies.map((especieId) => ({
                    especie: { connect: { id: especieId } },
                  }))
                : [],
          },
        },
      });

      return ong;
    } catch (error) {
      throw new Error("⚠️ Erro ao criar ONG");
    } finally {
      await prisma.$disconnect();
    }
  }

  async list() {
    try {
      const ong = await prisma.ongs.findMany();
      return ong;
    } catch (error) {
      throw new Error(`⚠️ Falha ao listar os ongs: ${error.message}`);
    } finally {
      await prisma.$disconnect();
    }
  }

  async listEmail(email) {
    try {
      const ong = await prisma.ongs.findFirst({
        where: { email },
        select: { id: true },
      });
      return ong;
    } catch (error) {
      throw new Error(`⚠️ Erro ao listar ONG por email: ${error.message}`);
    } finally {
      await prisma.$disconnect();
    }
  }

  async destroy(id) {
    try {
      await prisma.ongs.delete({
        where: { id },
      });
    } catch (error) {
      throw new Error("⚠️ Erro ao deletar ONG: " + error.message);
    } finally {
      await prisma.$disconnect();
    }
  }
}

export default new OngsServices();
