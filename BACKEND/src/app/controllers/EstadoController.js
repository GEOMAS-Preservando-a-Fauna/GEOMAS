import EstadoServices from "../services/EstadoService.js";

class EstadoController {
    async create(req, res) {
        const { name, sigla } = req.body;
        try {
            const estado = await EstadoServices.create({ name, sigla });

            res.status(200).json(estado);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    async list(req, res) {
        try {
            const estados = await EstadoServices.list();
            res.status(200).json(estados);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }
}

export default new EstadoController();
