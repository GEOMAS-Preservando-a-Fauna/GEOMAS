import AnimalsServices from "../services/AnimalService.js";

class AnimalController {
    async create(req, res) {
        const { name, scientificName, especie_id } = req.body;

        try {
            const animal = await AnimalsServices.create({
                name,
                scientificName,
                especie_id,
            });
            res.status(201).json(animal);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async list(req, res) {
        try {
            const animals = await AnimalsServices.list();
            res.status(200).json(animals);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    async listByEspecie(req, res) {
        const { especieId } = req.params;
        try {
            const animais = await AnimalsServices.listByEspecie(
                Number(especieId)
            );
            res.status(200).json(animais);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

export default new AnimalController();
