import EspeciesServices from "../services/EspeciesService.js";

class EspeciesController {
  async create(req, res) {
    try {
      const { name } = req.body;

      if (!name) {
        throw new Error("❌ O Nome especie é obrigatório!");
      }
      const especie = await EspeciesServices.create(name);
      res.status(200).json(especie);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async list(req, res) {
    try {
      const { id } = req.params;

      if (id) {
        const especiesOngs = await EspeciesServices.listByOng(Number(id));
        return res.status(200).json(especiesOngs);
      }

      const especies = await EspeciesServices.list();
      return res.status(200).json(especies);
    } catch (error) {
      return res.status(404).json({ error: error.message });
    }
  }
}

export default new EspeciesController();
