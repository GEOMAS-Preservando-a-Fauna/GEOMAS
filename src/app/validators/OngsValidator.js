import prisma from "../utils/prisma.js";

class OngsValidator {
    async validate(data) {
        const { name, email, password, number, animais } = data;

        if (!name) throw new Error("O nome da Instituição é obrigatório.");
        if (!number)
            throw new Error(
                "O número de telefone da Instituição é obrigatório."
            );
        if (!password)
            throw new Error("A senha de acesso da Instituição é obrigatória.");
        if (!email) throw new Error("O e-mail da Instituição é obrigatório.");

        const emailExistente = await prisma.ongs.findUnique({
            where: { email: email },
        });

        if (emailExistente) {
            throw new Error(
                "Esse E-mail já EXISTE, tente um E-mail não cadastrado!!"
            );
        }

        // Verifica se animais é um array, se não, define como um array vazio
        const animaisValidos = Array.isArray(animais) ? animais : [];

        if (animaisValidos.length > 0) {
            const animaisExistem = await prisma.animal.findMany({
                where: { id: { in: animaisValidos } },
            });

            if (animaisExistem.length !== animaisValidos.length) {
                throw new Error("Um ou mais animais informados não existem.");
            }
        }
    }
}

export default new OngsValidator();
