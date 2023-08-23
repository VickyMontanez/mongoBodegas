import { conx } from "../db_mg/atlas.js";
import { ObjectId } from "mongodb";

export async function apptraslado(req, res) {
    try {

        const { id, id_producto, id_bodega_origen, id_bodega_destino, cantidad, created_by, updated_by } = req.body;
        let db = await conx();
        let inventariosColleccion = db.collection("inventarios");
        let historialesColleccion = db.collection("historiales");

        const existingRecord = await historialesColleccion.findOne({ id });

        if (existingRecord) {
            res.status(400).send({ status: 400, message: "The ID already exists in the database" });
            return;
        }

        const origenBodega = await inventariosColleccion.findOne({
            id_producto: id_producto,
            id_bodega: id_bodega_origen,
            cantidad: { $gte: cantidad }
        });

        if (!origenBodega || cantidad >= origenBodega.cantidad) {
            res.status(400).send({ status: 400, message: "Insufficient product in the 'BodegaOrigen'", });
            return;
        } else {
            await inventariosColleccion.updateOne(
                { _id: origenBodega._id },
                { $inc: { cantidad: -cantidad } }
            );

            const destinoBodega = await inventariosColleccion.findOne({
                id_producto: id_producto,
                id_bodega: id_bodega_destino
            });

            !destinoBodega ? (
                await inventariosColleccion.insertOne({
                    _id: new ObjectId(),
                    id,
                    id_bodega: id_bodega_destino,
                    id_producto,
                    cantidad,
                    created_by,
                    updated_by,
                    created_at: new Date(),
                    updated_at: new Date()
                }))
            : await inventariosColleccion.updateOne({ _id: destinoBodega._id },{ $inc: { cantidad: +cantidad } });

            const nuevoHistorial = {
                _id: new ObjectId(),
                ...req.body,
                created_at: new Date(),
                updated_at: new Date()
            };

            await historialesColleccion.insertOne(nuevoHistorial);
            res.status(200).send({status: 200, message: "Transfer successful, history entry created successfully" });
        }
    } catch (error) {
        res.status(500).send({ status: 500, message: "Internal Server Error" });
        console.log(error.message);
    }
};