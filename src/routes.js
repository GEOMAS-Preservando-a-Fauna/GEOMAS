import { Router } from "express";
import Users from "./app/controllers/UsersController.js";
import Especies from "./app/controllers/EspeciesControlle.js";
import Animal from "./app/controllers/AnimalController.js";
import Ongs from "./app/controllers/OngsController.js";
import Estados from "./app/controllers/EstadoController.js";
import Cidade from "./app/controllers/CidadeController.js";
import Sessions from "./app/controllers/SessionsController.js";
import auth from "./app/middlewares/auth.js";
import Reports from "./app/controllers/ReportsController.js";

const router = new Router();

// Rotas públicas (não requerem autenticação)
router.post("/sessions", Sessions.create);
router.post("/users", Users.create);
router.post("/ongs", Ongs.create);
router.post("/logout", (req, res) => {
  res.status(200).json({ message: "Logout realizado com sucesso." });
});
router.get("/estados", Estados.list);
router.get("/cidade/estado/:id", Cidade.list);
router.get("/animais/especie/:especieId", Animal.listByEspecie);
router.get("/especies", Especies.list);

// Middleware de autenticação (todas as rotas abaixo exigem autenticação)
router.use(auth);

router.get("/sessions/user", Sessions.list); // Rota de login

// Rotas de Usuários
router.get("/users", Users.list);
router.get("/users/email/:email", Users.list);
router.put("/users/:email", Users.update);
router.delete("/users/:id", Users.destroy);

// Rotas de ONGs
router.get("/ongs", Ongs.list);
router.get("/ongs/:id", Ongs.list);
router.get("/ongs/email/:email", Ongs.list);
router.delete("/ongs/:id", Ongs.destroy);

// Rotas de Espécies
router.post("/especies", Especies.create);
router.get("/especies/ongs/:id", Especies.list);

// Rotas de Animais
router.post("/animais", Animal.create);
router.get("/animais", Animal.list);

// Rotas de Estados
router.post("/estados", Estados.create);

// Rotas de Cidades
router.post("/cidades", Cidade.create);

// Rotas de Denúncias (Reports)
router.post("/reports", Reports.create);
router.get("/reports", Reports.list);
router.get("/reports/:id", Reports.show);
router.put("/reports/:id", Reports.update);
router.delete("/reports/:id", Reports.destroy);

router.get("/reports/ongs/:ongid", Reports.list);

export default router;
