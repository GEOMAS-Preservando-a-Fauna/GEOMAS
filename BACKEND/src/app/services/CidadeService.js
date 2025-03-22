import prisma from "../utils/prisma.js";

class CidadeService {
    async create(data) {
        try {
            const { name, estado_id } = data;

            if (!name) {
                throw new Error("O nome da cidade é obrigatório.");
            }

            const newName = name.toUpperCase();

            const validName = await prisma.cidade.findFirst({
                where: { name: newName },
            });

            if (validName) {
                throw new Error(
                    `A cidade com este nome já existe: ${newName}.`
                );
            }

            if (!estado_id) {
                throw new Error("A sigla do estado é obrigatória.");
            }

            const validState = await prisma.estado.findUnique({
                where: { id: estado_id },
            });

            if (!validState) {
                throw new Error(`O estado com ID ${estado_id} não existe.`);
            }

            const cidade = await prisma.cidade.create({
                data: {
                    name: newName,
                    estado_id,
                },
            });

            return cidade;
        } catch (error) {
            console.error("❌ Erro ao criar um Cidade:", error);
            throw new Error(`⚠️ Erro ao criar uma  Cidade: ${error.message}`);
        }
    }
    async list(id) {
        try {
            const cidades = await prisma.cidade.findMany({
                where: { estado_id: Number(id) },
            });
            return cidades;
        } catch (error) {
            console.error("❌ Erro ao listar as Cidades:", error);
            throw new Error(`⚠️ Erro ao listar as Cidades: ${error.message}`);
        }
    }
}

export default new CidadeService();
