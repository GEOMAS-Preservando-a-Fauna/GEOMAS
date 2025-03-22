import express from "express";
import routes from "./routes.js";

// import authmiddleware from "./app/middlewares/auth.js";

class App {
    constructor() {
        this.server = express();
        this.middleware();
        this.routes();
    }

    middleware() {
        this.server.use(express.json());
        this.server.use(express.urlencoded({ extended: true }));
        // this.server.use(authmiddleware);
    }

    routes() {
        this.server.use(routes);
    }
}

export default new App().server;
