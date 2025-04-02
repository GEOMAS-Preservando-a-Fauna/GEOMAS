import prisma from "../utils/prisma.js";

class EspeciesServices {
  async create(name) {
    try {
      await prisma.classeAnimal.createMany({
        data: especies,
        skipDuplicates: true,
      });

      const especie = await prisma.classeAnimal.create({
        data: {
          name: name,
        },
      });

      return especie;
    } catch (error) {
      throw new Error(`⚠️ Erro ao criar uma especie: ${error.message}`);
    } finally {
      await prisma.$disconnect();
    }
  }

  async list() {
    try {
      const especies = await prisma.classeAnimal.findMany();
      return especies;
    } catch (error) {
      throw new Error(`⚠️ Erro ao listar varias especies:: ${error.message}`);
    } finally {
      await prisma.$disconnect();
    }
  }

  async listByOng(id) {
    try {
      if (id) {
        return await prisma.ongAnimal.findMany({
          where: { especieId: id },
          include: { ong: true },
        });
      }
      return await prisma.classeAnimal.findMany();
    } catch (error) {
      throw new Error(`⚠️ Erro ao listar espécies: ${error.message}`);
    } finally {
      await prisma.$disconnect();
    }
  }
}

export default new EspeciesServices();
