import prisma from "../utils/prisma.js";

class EstadoServices {
  async create(data) {
    try {
      const { name, sigla } = data;

      if (!name) {
        throw new Error("O nome da cidade é obrigatório.");
      }

      const newName = name.toUpperCase();

      const validName = await prisma.estado.findFirst({
        where: { name: newName },
      });

      if (validName) {
        throw new Error(`A cidade com este nome já existe: ${newName}.`);
      }

      if (!sigla) {
        throw new Error(" A sigla do estado é obrigatório.");
      }

      const estado = await prisma.estado.create({
        data: {
          name: newName,
          sigla,
        },
      });

      return estado;
    } catch (error) {
      throw new Error(`⚠️ Erro ao criar um Estado: ${error.message}`);
    } finally {
      await prisma.$disconnect();
    }
  }
  async list() {
    try {
      const estados = await prisma.estado.findMany();
      return estados;
    } catch (error) {
      throw new Error(`⚠️ Erro ao criar uma especie: ${error.message}`);
    } finally {
      await prisma.$disconnect();
    }
  }
}

export default new EstadoServices();
