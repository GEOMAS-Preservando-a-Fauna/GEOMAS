import prisma from "../utils/prisma.js";

class ReportServices {
  async show(id) {
    try {
      const report = await prisma.report.findUnique({
        where: { id },
        include: {
          especie: true,
          animal: true,
          ongs: true,
          user: true,
        },
      });

      if (!report) {
        throw new Error("Denúncia não encontrada.");
      }

      return report;
    } catch (error) {
      throw new Error(`Erro ao buscar denúncia: ${error.message}`);
    }
  }

  async create(data) {
    const {
      latitude,
      longitude,
      endereco,
      reportType,
      especie_id,
      animal_id,
      ong_id = [],
      user_id,
    } = data;

    try {
      const reports = await prisma.report.create({
        data: {
          latitude,
          longitude,
          endereco,
          reportType,
          especie_id,
          animal_id,
          user_id,
          ongs: {
            create: ong_id.map((ongId) => ({
              ong: { connect: { id: ongId } },
            })),
          },
        },
        include: { ongs: true, user: true },
      });

      return reports;
    } catch (error) {
      console.error("Erro ao criar denúncia:", error);
      throw new Error(`Falha na criação: ${error.message}`);
    }
  }

  async list() {
    try {
      const reports = await prisma.report.findMany({});

      return reports;
    } catch (error) {
      throw new Error(`Erro ao listar denúncias: ${error.message}`);
    }
  }

  async listReports(ongid) {
    try {
      const reportsOng = await prisma.report.findMany({
        where: {
          ongs: {
            some: {
              ongId: ongid,
            },
          },
          status: false,
        },
        orderBy: { created_at: "desc" },
      });

      return reportsOng;
    } catch (error) {
      console.error("❌ Falha ao listar os reports:", error);
      throw new Error(`⚠️ Falha ao listar os reports: ${error.message}`);
    }
  }

  async updateReport(id, status) {
    try {
      const reportExist = await prisma.report.findUnique({ where: { id } });
      if (!reportExist) {
        throw new Error("Denúncia não encontrada.");
      }

      const reportStatus = await prisma.report.update({
        where: { id },
        data: { status },
      });

      return reportStatus;
    } catch (error) {
      throw new Error(`Erro ao alterar status da denúncia: ${error.message}`);
    }
  }

  async destroy(id) {
    try {
      const reportExists = await prisma.report.findUnique({
        where: { id: Number(id) },
      });

      if (!reportExists) {
        throw new Error("Denúncia não encontrada.");
      }

      await prisma.report.delete({
        where: { id: Number(id) },
      });

      return { message: "Denúncia excluída com sucesso." };
    } catch (error) {
      throw new Error(`Erro ao excluir denúncia: ${error.message}`);
    }
  }
}

export default new ReportServices();
