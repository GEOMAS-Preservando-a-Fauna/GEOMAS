import OngsServices from "../services/OngsService.js";

class OngsController {
  async create(req, res) {
    const {
      name,
      sigla,
      email,
      password,
      description,
      number,
      numberSecond,
      especies,
      cidadeId,
    } = req.body;

    try {
      const ong = await OngsServices.create({
        name,
        email,
        sigla,
        password,
        description,
        number,
        numberSecond,
        especies: especies || null,
        cidadeId: cidadeId || null,
      });

      res.status(201).json(ong);
    } catch (error) {
      res.status(500).json({
        error: error.message || "Erro ao criar ONG",
      });
    }
  }

  async list(req, res) {
    const { email } = req.params;

    try {
      if (email) {
        const ong = await OngsServices.listEmail(email);
        return res.status(200).json(ong);
      }
      const ongs = await OngsServices.list();
      return res.status(200).json(ongs);
    } catch (error) {
      console.log("Erro ao listar ongs/ong", error.message);
      res.status(500).json({ error: error.message });
    }
  }

  async destroy(req, res) {
    const id = req.params.id;
    try {
      const deleted = await OngsServices.destroy(Number(id));
      res.status(204).json({ message: "Ong deletado com sucesso!" });
    } catch (error) {
      console.log("Erro ao deletar user", error.message);
      res.status(400).json({ error: error.message });
    }
  }
}

export default new OngsController();
