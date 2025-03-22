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

            // console.log("ONG criada com sucesso!", ong);
            return ong;
        } catch (error) {
            console.error("❌ Erro ao criar ONG:", error);
            throw new Error("⚠️ Erro ao criar ONG");
        }
    }

    async list() {
        try {
            const ong = await prisma.ongs.findMany();
            return ong;
        } catch (error) {
            console.error("❌ Falha ao listar os ongs:", error);
            throw new Error(`⚠️ Falha ao listar os ongs: ${error.message}`);
        }
    }

    async listEmail(email) {
        try {
            const ong = await prisma.ongs.findFirst({
                where: { email },
                select: { id: true },
            });
            // console.log("🔍 ID da ONG encontrado:", ong.id);
            return ong;
        } catch (error) {
            console.error("❌ Erro ao listar ONG por email:", error);
            throw new Error(
                `⚠️ Erro ao listar ONG por email: ${error.message}`
            );
        }
    }

    async destroy(id) {
        try {
            await prisma.ongs.delete({
                where: { id },
            });
        } catch (error) {
            throw new Error("⚠️ Erro ao deletar ONG: " + error.message);
        }
    }
}

export default new OngsServices();
