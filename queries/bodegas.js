import {conx} from "../db_mg/atlas.js";
import { ObjectId } from "mongodb";

//1. Get all bodegas alphabetically
export async function getBodegas(req, res) {
    try {
        let db = await conx();
        let colleccion = db.collection("bodegas");
        let results = await colleccion.find({}).sort({ nombre: 1 }).toArray();
        results.length > 0 ? res.send(results).status(200) : res.status(404).send({ status: 404, message: "Found But Without Contain :(" })
    } catch (error) {
        res.status(404).send({ status:404, message: "Query Not Found :(" })
    }
};




