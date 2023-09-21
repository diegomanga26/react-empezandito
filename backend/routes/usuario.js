import { Router } from "express";
import { registerUsuario } from "../controllers/usuario.js";

const appUsuario = Router();

appUsuario.post(
    "/registro", registerUsuario()
);

export default appUsuario;