import prisma from "../utils/prisma.js";
import {
  especies,
  animals,
  estados,
  cidades,
  ongsData,
} from "../utils/constData.js";

class InsertDataService {
  async InsertDatas() {
    try {
      // Verificando a existência dos dados antes de inserir
      const [
        classeExists,
        estadoExists,
        cidadeExists,
        animalExists,
        ongExists,
      ] = await Promise.all([
        prisma.classeAnimal.findFirst(),
        prisma.estado.findFirst(),
        prisma.cidade.findFirst(),
        prisma.animal.findFirst(),
        prisma.ongs.findFirst(),
      ]);

      // Iniciando a criação dos dados
      const createData = [];
      if (!classeExists) {
        createData.push(
          prisma.classeAnimal.createMany({
            data: especies,
            skipDuplicates: true,
          })
        );
      }
      if (!estadoExists) {
        createData.push(
          prisma.estado.createMany({ data: estados, skipDuplicates: true })
        );
      }
      if (!cidadeExists) {
        createData.push(
          prisma.cidade.createMany({ data: cidades, skipDuplicates: true })
        );
      }
      if (!animalExists) {
        createData.push(
          prisma.animal.createMany({ data: animals, skipDuplicates: true })
        );
      }

      // Criando os dados simultaneamente
      if (createData.length > 0) {
        await Promise.all(createData);
      }

      // Inserindo as ONGs
      if (!ongExists) {
        await Promise.all(
          ongsData.map((ong) =>
            prisma.ongs.create({
              data: {
                ...ong,
                especies: {
                  create: [
                    { especieId: 1 },
                    { especieId: 2 },
                    { especieId: 3 },
                    { especieId: 4 },
                  ],
                },
              },
            })
          )
        );

        // Criando usuário convidado
        await prisma.user.create({
          data: { email: "convidado@gmail.com", password: "convidado" },
        });
      }

      return { message: "Dados padrões criados com sucesso!" };
    } catch (error) {
      throw new Error(`⚠️ Erro ao Criar Dados! ${error.message}`);
    } finally {
      await prisma.$disconnect();
    }
  }
}

export default new InsertDataService();
