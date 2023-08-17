import {conx} from "../db_mg/atlas.js";
import { ObjectId } from "mongodb";

export async function postInventario(req, res){
    try {
        const { id_producto, id_bodega, cantidad } = req.body;
    
        let db = await conx();
        let inventariosColleccion = db.collection("inventarios");
    
        const existingInv = await inventariosColleccion.findOne({
            id_producto: req.body.id_producto,
            id_bodega: req.body.id_bodega
        });
    
        if (existingInv) {
            const updatedQuantity = existingInv.cantidad + cantidad;
            await inventariosColleccion.updateOne(
                { _id: existingInv._id },
                { $set: { cantidad: updatedQuantity } }
            );
            res.send({ status: 200, message: "Inventory entry updated successfully" });
        } else {
            const newEntry = {
                id_producto: req.body.id_producto,
                id_bodega: req.body.id_bodega,
                cantidad: req.body.cantidad
            };
            await inventariosColleccion.insertOne(newEntry);
            res.send({ status: 200, message: "Inventory entry added successfully" });
        }
        
    } catch (error) {
        res.status(500).send({ status: 500, message: "Internal Server Error" });
    }
}
