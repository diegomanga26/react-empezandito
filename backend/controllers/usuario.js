import {con} from "../db/config/atlas.js"

const db = await con();
const usuario = db.collection("usuario");

export const registerUsuario = async(req, res) =>{
    try {
        const {correoReg, contraseñaReg} = req.body;
        const user = await usuario.findOne({
            correo: correoReg
        });
        
        if (!user){
            const registro = await usuario.insertOne({
                correo: correoReg,
                contraseña: contraseñaReg
            });
            if (!registro) {
                return res.status(200).json({})
            } else {
                return res.status(201).json({})
            };
            
        } else {
            return res.status(201).json({});
        }

    } catch (error) {
        throw error;
    }
}
export const loginUsuario = async(req, res) =>{
    try {
        const {correoReg, contraseñaReg} = req.body;
        const user = await usuario.findOne({
            correo: correoReg,
            contraseña: contraseñaReg
        });

        if (!user){
            return res.status(200).json({});
        } else {
            return res.status(201).json({})
        }
    } catch (error) {
        console.log(error);
    };
    
}