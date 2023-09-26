import { Router } from "express";
import { loginUsuario, registerUsuario } from "../controllers/usuario.js";

const appUsuario = Router();

appUsuario.post(
    "/registro", registerUsuario
);

appUsuario.post(
    "/login", loginUsuario
);

export default appUsuario;