import express from "express";
import dotenv from "dotenv";
import routerEnd from "./routes/index.js";
import cors from 'cors';
const corsOptions = {
    origin: '*',
    methods: 'GET,PUT,POST,DELETE',
    optionsSuccessStatus: 204
};

dotenv.config();
const app = express();

// Inicio del servidor
app.use(cors(corsOptions));
app.use(express.json());
app.use('/', routerEnd);

const host = process.env.VITE_HOST_BACK;
const port = process.env.VITE_PORT_BACK;

app.listen( port, host,  () => {
    console.log(`http://${host}:${port}`);
});