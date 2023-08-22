import { conx } from "../db_mg/atlas.js";
import { ObjectId } from "mongodb";


/* {
  "id":31,
  "id_producto":1,
  "cantidad":3,
  "id_inventario":2,
  "id_bodega_origen":1,
  "id_bodega_destino":2,
  "created_by":1,
  "updated_by":1,
  "created_at": "2023-08-22",
  "updated_at": "2023-08-22"
} */
export async function apptraslado(req, res) {
    try {

        const { id_producto, id_bodega_origen, id_bodega_destino, cantidad } = req.body;
        console.log(req.body);
        let db = await conx();
        let inventariosColleccion = db.collection("inventarios");
        let historialesColleccion = db.collection("historiales");

        const origenBodega = await inventariosColleccion.findOne({
            id_producto: id_producto,
            id_bodega: id_bodega_origen,
            cantidad: { $gte: cantidad }
        });

        if (!origenBodega || cantidad > origenBodega.cantidad) {
            res.status(400).send({ status: 400, message: "Bodega Origen insuficiente" });
            return;
        } else {
            const resultOrigen = await inventariosColleccion.updateOne(
                { _id: origenBodega._id },
                { $inc: { cantidad: -cantidad } }
            );

            const destinoBodega = await inventariosColleccion.findOne({
                id_producto: id_producto,
                id_bodega: id_bodega_destino
            });

            if (!destinoBodega) {
                const nuevoInventario = {
                    ...req.body,
                    id_bodega: id_bodega_destino,
                    created_at: new Date(),
                    updated_at: new Date()
                };

                await inventariosColleccion.insertOne(nuevoInventario);
                res.send({ message: "Traslado exitoso, nueva entrada de historial creada", resultOrigen });
            } else {
                const resultDestino = await inventariosColleccion.updateOne(
                    { _id: destinoBodega._id },
                    { $inc: { cantidad: +cantidad } }
                );

                const nuevoHistorial = {
                    ...req.body,
                    created_at: new Date(),
                    updated_at: new Date()
                };

                await historialesColleccion.insertOne(nuevoHistorial);
                res.send({ message: "Traslado exitoso, entrada de historial creada para destino y origen", resultOrigen, resultDestino });
            }
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ status: 500, message: "Internal Server Error" });
    }
};