import prisma from "../utils/prisma.js";
import AnimalsValidator from "../validators/AnimalsValidator.js";
import { animals } from "../utils/constData.js";

class AnimalsServices {
  async create(data) {
    try {
      await AnimalsValidator.validate(data);

      await prisma.animal.createMany({
        data: animals,
        skipDuplicates: true,
      });

      const { name, scientificName, especie_id } = data;

      const animal = await prisma.animal.create({
        data: {
          name,
          scientificName,
          especie_id,
        },
      });

      return animal;
    } catch (error) {
      throw new Error(`⚠️ Erro ao Criar Animal! ${error.message}`);
    } finally {
      await prisma.$disconnect();
    }
  }

  async list() {
    try {
      const animals = await prisma.animal.findMany();
      return animals;
    } catch (error) {
      throw new Error(`⚠️ Erro ao listar varios animals:: ${error.message}`);
    } finally {
      await prisma.$disconnect();
    }
  }

  async listByEspecie(especieId) {
    try {
      const animals = await prisma.animal.findMany({
        where: { especie_id: especieId },
      });
      return animals;
    } catch (error) {
      throw new Error(
        `⚠️ Erro ao listar animais por espécie: ${error.message}`
      );
    } finally {
      await prisma.$disconnect();
    }
  }
}

export default new AnimalsServices();
