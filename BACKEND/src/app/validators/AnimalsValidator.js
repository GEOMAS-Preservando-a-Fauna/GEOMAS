import prisma from "../utils/prisma.js";

class AnimalsValidator {
    async validate(data) {
        const { name, scientificName, especie_id, ongs } = data;

        try {
            if (!name) {
                throw new Error("O nome do Animal é obrigatório.");
            }

            if (!scientificName) {
                throw new Error("O nome Científico do Animal é obrigatório.");
            }

            if (!especie_id || isNaN(especie_id)) {
                throw new Error(
                    "O ID da espécie é obrigatório e deve ser um número."
                );
            }

            const validEspecie = await prisma.classeAnimal.findUnique({
                where: { id: especie_id },
            });

            if (!validEspecie) {
                throw new Error(`A espécie com ID ${especie_id} não existe.`);
            }
        } catch (error) {
            throw new Error(`Falha na validação: ${error.message}`);
        }
    }
}

export default new AnimalsValidator();
