import {conx} from "../db_mg/atlas.js";
import { ObjectId } from "mongodb";

export async function getProductos(req, res) {
    try {
        let db = await conx();
        let colleccion = db.collection("productos");
        let results = await colleccion.find({}).sort({ nombre: 1 }).toArray();
        results.length > 0 ? res.send(results).status(200) : res.status(404).send({ status: 404, message: "Found But Without Contain :(" })
    } catch (error) {
        res.status(404).send({ status:404, message: "Query Not Found :(" })
    }
};

export async function getTotal(req, res){
    try {
        let db = await conx();
        let colleccion = db.collection("productos");
        let results = await colleccion.find({}).sort({ nombre: 1 }).toArray();
        results.length > 0 ? res.send(results).status(200) : res.status(404).send({ status: 404, message: "Found But Without Contain :(" })
    } catch (error) {
        res.status(404).send({ status:404, message: "Query Not Found :(" })
    }
}