import jwt from "jsonwebtoken";
import authConfig from "../config/auth.js";

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "Token is required." });
  }

  const [, token] = authHeader.split(" ");

  try {
    const decoded = await jwt.verify(token, authConfig.secret);
    req.user = decoded;
    return next();
  } catch (error) {
    console.error("Erro ao verificar token:", error);
    return res.status(401).json({ error: "Token is invalid." });
  }
};
