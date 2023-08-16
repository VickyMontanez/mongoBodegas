import {conx} from "../db_mg/atlas.js";
import { ObjectId } from "mongodb";
import { DTO } from "../limit/token.js"
import { rateLimit } from "express-rate-limit";

//Get all bodegas alphabetically
export async function getBodegas(req, res) {
    try {
        let db = await conx();
        let colleccion = db.collection("bodegas");
        let results = await colleccion.find({}).sort({ nombre: 1 }).toArray();

        results.length > 0
            ? res.send(results).status(200)
            : res.status(404).send({ status: 404, message: "Found But Without Contain" })

        console.log(req.rateLimit);

    } catch (error) {
        console.error(error);
        res.status(404).send("Query Not Found")
    }
};

export async function postBodegas(req, res){
    try {
        let db = await conx();
        let colleccion = db.collection("bodegas");
        const newBodega = {
            ...req.body,
            created_at: new Date(req.body.created_at),
            updated_at: new Date(req.body.updated_at)
        };

        const resultado = await colleccion.insertOne(newBodega);

        if (resultado.insertedCount > 0) {
            res.status(201).send({ message: "Bodega creada exitosamente.", bodegaId: resultado.insertedId });
        } else {
            res.status(500).send({ message: "No se pudo crear la bodega." });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
}
