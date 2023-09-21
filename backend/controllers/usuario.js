import { con } from "../db/config/atlas.js";

export async function registerUsuario(req, res) {
    try {
        const db = await con();
        await db.collection("usuario").insertOne(req.body);
        res.status(201).send("success");
        alert("Usuario registrado")
        return {
            status: 201,
            message: "success"
        };
    } catch (error) {
        console.error(error);
        res.status(500).send("error");
    }
}