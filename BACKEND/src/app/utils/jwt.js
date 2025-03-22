import jwt from "jsonwebtoken";
import authConfig from "../config/auth.js";

const SECRET = process.env.JWT_SECRET_KEY;

export const generateToken = (payload) => {
    return jwt.sign(payload, SECRET, { expiresIn: authConfig.expiresIn });
};
