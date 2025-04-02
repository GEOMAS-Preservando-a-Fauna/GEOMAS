import UserService from "../services/UserServices.js";

class UsersController {
  async create(req, res) {
    const { email, password } = req.body;

    try {
      const newUser = await UserService.create({ email, password });

      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async list(req, res) {
    const { email } = req.params;

    try {
      if (email) {
        const user = await UserService.listEmail(email);
        return res.status(200).json(user);
      }
      const users = await UserService.list();
      return res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async update(req, res) {
    const { email } = req.params;
    const { password, newPassword, newEmail } = req.body;
    try {
      RequiredField({ email, password, newPassword, newEmail });

      if (newEmail) {
        const updatedEmail = await UserService.UpdateEmail({
          email,
          newEmail,
        });
        res.status(200).json({
          updatedEmail,
          message: "E-mail do Usuário alterado com sucesso!",
        });
      }

      if (newPassword) {
        const updatedPassword = await UserService.updatePassword({
          email,
          password,
          newPassword,
        });

        res.status(200).json({
          updatedPassword,
          message: "Senha do Usuário alterada com sucesso!",
        });
      }
      return res
        .status(400)
        .json({ message: "Nenhuma alteração foi realizada!" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async destroy(req, res) {
    const id = req.params.id;
    try {
      const deleted = await UserService.destroy(Number(id));
      res.status(204).json({ message: "Usuário deletado com sucesso!" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

export default new UsersController();
