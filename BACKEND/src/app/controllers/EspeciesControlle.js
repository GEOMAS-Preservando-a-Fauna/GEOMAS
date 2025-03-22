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
            const especies = await EspeciesServices.list();
            res.status(200).json(especies);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }
}

export default new EspeciesController();
