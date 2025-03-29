import prisma from "../utils/prisma.js";
import { especies } from "../utils/constData.js";

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
            console.error("❌ Erro ao criar uma especie:", error);
            console.error("❌ Erro ao criar varias especies:", error);
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
            console.error("❌ Erro ao listar varias especies:", error);
            throw new Error(
                `⚠️ Erro ao listar varias especies:: ${error.message}`
            );
        } finally {
            await prisma.$disconnect();
        }
    }
}

export default new EspeciesServices();
