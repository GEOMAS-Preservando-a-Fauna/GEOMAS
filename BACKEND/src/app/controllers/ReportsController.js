import ReportServices from "../services/ReportServices.js";

class ReportsController {
  async show(req, res) {
    const { id } = req.params;

    try {
      const report = await ReportServices.show(Number(id));
      res.status(200).json(report);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async create(req, res) {
    const { latitude, longitude, especie_id, animal_id, ong_id, user_id } =
      req.body;
    let { endereco, reportType } = req.body;
    endereco = endereco.toUpperCase();
    reportType = reportType.toUpperCase();
    try {
      const report = await ReportServices.create({
        latitude,
        longitude,
        endereco,
        reportType,
        especie_id,
        animal_id,
        user_id,
        ong_id,
      });

      res.status(201).json(report);
    } catch (error) {
      res.status(500).json({
        error: error.message || "Erro ao criar Denúncia",
      });
    }
  }

  async list(req, res) {
    const { ongid, id } = req.params;

    try {
      if (ongid) {
        const reportsOng = await ReportServices.listReports(Number(ongid));
        return res.status(200).json(reportsOng);
      }

      if (id) {
        const report = await ReportServices.show(id);
        return res.status(200).json(report);
      }

      const reports = await ReportServices.list();
      return res.status(200).json(reports);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const { status } = req.body;

    try {
      const result = await ReportServices.updateReport(Number(id), status);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async destroy(req, res) {
    const { id } = req.params;

    try {
      const result = await ReportServices.destroy(id);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default new ReportsController();
