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
      if (!(await prisma.classeAnimal.findFirst())) {
        await prisma.classeAnimal.createMany({
          data: especies,
          skipDuplicates: true,
        });
        console.log("Classes de animais criadas com sucesso");
      }

      if (!(await prisma.estado.findFirst())) {
        await prisma.estado.createMany({
          data: estados,
          skipDuplicates: true,
        });
        console.log("Estados criados com sucesso");
      }

      if (!(await prisma.cidade.findFirst())) {
        await new Promise((resolve) => setTimeout(resolve, 500));

        await prisma.cidade.createMany({
          data: cidades,
          skipDuplicates: true,
        });
        console.log("Cidades criadas com sucesso");
      }

      if (!(await prisma.animal.findFirst())) {
        await prisma.animal.createMany({
          data: animals,
          skipDuplicates: true,
        });
        console.log("Animais criados com sucesso");
      }

      if (!(await prisma.ongs.findFirst())) {
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
        console.log("ONGs criadas com sucesso");
        await prisma.user.create({
          data: { email: "convidado@gmail.com", password: "convidado" },
        });
        console.log("Usuário convidado criado com sucesso");
      }

      return { message: "Dados padrões criados com sucesso!" };
    } catch (error) {
      console.error("Erro detalhado:", error);
      throw new Error(`⚠️ Erro ao Criar Dados! ${error.message}`);
    } finally {
      await prisma.$disconnect();
    }
  }
}

export default new InsertDataService();
