import prisma from "../utils/prisma.js";
import { passwordCompareHash } from "../utils/bcryptPass.js";
import { generateToken } from "../utils/jwt.js";

class SessionsController {
  async create(req, res) {
    try {
      const { email, password } = req.body;

      const user = await prisma.user.findUnique({
        where: { email },
      });

      const ong = await prisma.ongs.findUnique({
        where: { email },
      });

      const account = user || ong;
      if (!account) {
        return res.status(404).json({ error: "Email not found." });
      }

      const passwordMatch = await passwordCompareHash(
        password,
        account.password
      );

      if (!passwordMatch) {
        return res.status(401).json({ error: "Password does not match." });
      }

      const token = generateToken({
        id: account.id,
        email: account.email,
        type: user ? "user" : "ong",
      });

      return res.status(200).json({ type: user ? "user" : "ong", token });
    } catch (error) {
      return res.status(500).json({ error: "Internal server error." });
    }
  }

  async list(req, res) {
    const user = req.user;
    try {
      if (user) {
        return res.status(201).json(user);
      }
    } catch (error) {
      return res.status(500).json({ error: "Internal server error." });
    }
  }
}

export default new SessionsController();
