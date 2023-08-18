import {conx} from "../db_mg/atlas.js";
import { ObjectId } from "mongodb";

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

export async function postBodegas(req, res){
    try{
        let db = await conx();
        let colleccion = db.collection("bodegas");
        let data = req.body;
        const newBodega = {
            _id: new ObjectId(),
            ...data,
            created_at: new Date(req.body.created_at),
            updated_at: new Date(req.body.updated_at)
        };
        await colleccion.insertOne(newBodega);
        res.status(201).send({ status:201, message: "Created :)" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ status:500, message: "Internal Server Error :(" });
    }
};



