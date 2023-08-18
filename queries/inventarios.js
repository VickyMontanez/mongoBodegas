import {conx} from "../db_mg/atlas.js";
import { ObjectId } from "mongodb";

export async function postInventario(req, res){
    try {
        const { id_producto, id_bodega, cantidad } = req.body;
        let db = await conx();
        let inventariosColleccion = db.collection("inventarios");
        const existingInv = await inventariosColleccion.findOne({
            id_producto: id_producto,
            id_bodega: id_bodega
        });
        if (existingInv) {
            const updatedQuantity = existingInv.cantidad + cantidad;
            await inventariosColleccion.updateOne(
                { id: existingInv.id },
                { $set: { cantidad: updatedQuantity } }
            );
            res.send({ status: 200, message: "Inventory entry updated successfully" });
        } else {
            const newEntry = {
                ...req.body,
                created_at: new Date(req.body.created_at),
                updated_at: new Date(req.body.updated_at)
            };
            await inventariosColleccion.insertOne(newEntry);
            res.send({ status: 200, message: "Inventory entry added successfully" });
        }
        
    } catch (error) {
        res.status(500).send({ status: 500, message: "Internal Server Error" });
        console.log(error.message);
    }
}