import CidadeService from "../services/CidadeService.js";

class CidadeController {
    async create(req, res) {
        const { name, estado_id } = req.body;
        try {
            const cidade = await CidadeService.create({ name, estado_id });

            res.status(200).json(cidade);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async list(req, res) {
        try {
            const estadoId = req.params.id;
            const cidadesEstado = await CidadeService.list(estadoId);
            res.status(200).json(cidadesEstado);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

export default new CidadeController();
