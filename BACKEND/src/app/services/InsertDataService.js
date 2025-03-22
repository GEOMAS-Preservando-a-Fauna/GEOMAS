import prisma from "../utils/prisma.js";
import { especies, animals, estados, cidades } from "../utils/constData.js";

import { hash1, hash2, hash3, hash4, hash5 } from "../utils/ongsPassbcrypt.js";

class InsertDataService {
    async InsertDatas() {
        try {
            // Verificar se já existem classes de animais cadastradas
            const classeExists = await prisma.classeAnimal.findFirst();
            if (!classeExists) {
                await prisma.classeAnimal.createMany({
                    data: especies,
                    skipDuplicates: true,
                });
            }

            // Verificar se já existem estados cadastrados
            const estadoExists = await prisma.estado.findFirst();
            if (!estadoExists) {
                await prisma.estado.createMany({
                    data: estados,
                    skipDuplicates: true,
                });
            }

            // Verificar se já existem cidades cadastradas
            const cidadeExists = await prisma.cidade.findFirst();
            if (!cidadeExists) {
                await prisma.cidade.createMany({
                    data: cidades,
                    skipDuplicates: true,
                });
            }

            // Verificar se já existem animais cadastrados
            const animalExists = await prisma.animal.findFirst();
            if (!animalExists) {
                await prisma.animal.createMany({
                    data: animals,
                    skipDuplicates: true,
                });
            }

            const ongExists = await prisma.ongs.findFirst();

            if (!ongExists) {
                await prisma.ongs.create({
                    data: {
                        name: "BEMTEVI Consultoria Ambiental",
                        sigla: "BEMTEVI",
                        email: "contato@bemteviambiental.com.br",
                        password: hash1,
                        description:
                            "Consultoria ambiental especializada na preservação e recuperação de ecossistemas.",
                        number: "16 99214 8848",
                        cidadeId: 8,
                        especies: {
                            create: [
                                { especieId: 1 },
                                { especieId: 2 },
                                { especieId: 3 },
                                { especieId: 4 },
                            ],
                        },
                    },
                });

                await prisma.ongs.create({
                    data: {
                        name: "Clínica Bicho do Mato",
                        sigla: "BICHO DO MATO",
                        email: "bichodomato.rp@gmail.com",
                        password: hash2,
                        description:
                            "Clínica veterinária especializada no atendimento e cuidados com animais silvestres.",
                        number: "(16) 98106-2869",
                        cidadeId: 8,
                        especies: {
                            create: [
                                { especieId: 1 },
                                { especieId: 2 },
                                { especieId: 3 },
                                { especieId: 4 },
                            ],
                        },
                    },
                });

                await prisma.ongs.create({
                    data: {
                        name: "Centro de Triagem e Reabilitação de Animais Silvestres (CETRAS) Morro de São Bento",
                        sigla: "CETRAS",
                        email: "cetas.sp@ibama.gov.br",
                        password: hash3,
                        description:
                            "Centro dedicado ao resgate, tratamento e reabilitação de animais silvestres.",
                        number: "(16) 3603-9130",
                        numberSecond: "(16) 3603-9138",
                        cidadeId: 8,
                        especies: {
                            create: [
                                { especieId: 1 },
                                { especieId: 2 },
                                { especieId: 3 },
                                { especieId: 4 },
                            ],
                        },
                    },
                });

                await prisma.ongs.create({
                    data: {
                        name: "POLÍCIA AMBIENTAL",
                        sigla: "PA",
                        email: "ambientaldenuncias@policiamilitar.sp.gov.br",
                        password: hash4,
                        description:
                            "Órgão responsável pela fiscalização e proteção ambiental, combatendo crimes ambientais.",
                        number: "(16) 3996-0450",
                        numberSecond: "(16) 3996-0459",
                        cidadeId: 8,
                        especies: {
                            create: [
                                { especieId: 1 },
                                { especieId: 2 },
                                { especieId: 3 },
                                { especieId: 4 },
                            ],
                        },
                    },
                });
                await prisma.ongs.create({
                    data: {
                        name: "IBAMA",
                        sigla: "IBAMA",
                        email: "linhaverde.sede@ibama.gov.br",
                        password: hash5,
                        description:
                            "Instituto Brasileiro do Meio Ambiente e dos Recursos Naturais Renováveis, responsável pela regulamentação e fiscalização ambiental no Brasil.",
                        number: "0800-618080",
                        numberSecond: "(16) 3610-1174",
                        cidadeId: 8,
                        especies: {
                            create: [
                                { especieId: 1 },
                                { especieId: 2 },
                                { especieId: 3 },
                                { especieId: 4 },
                            ],
                        },
                    },
                });

                await prisma.user.create({
                    data: {
                        email: "convidado@gmail.com",
                        password: "convidado",
                    },
                });
            }

            return { message: "Dados padrões criados com sucesso!" };
        } catch (error) {
            console.error("❌ Erro ao inserir dados padrões:", error);
            throw new Error(`⚠️ Erro ao Criar Dados! ${error.message}`);
        }
    }
}

export default new InsertDataService();
