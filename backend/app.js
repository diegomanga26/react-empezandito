import express from "express";
import dotenv from "dotenv";
import routerEnd from "./routes/index.js";

dotenv.config();
const app = express();

// Inicio del servidor
app.use(express.json());
app.use('/', routerEnd)

app.listen( () => {
    console.log(`http://${process.env.VITE_HOST_BACK}:${process.env.VITE_PORT_BACK}`);
});