import express from "express";
import { ObjectId } from "mongodb";
import { conx } from "../db_mg/atlas.js";

const appHis = express();
appHis.use(express.json());

//Get ALL the Documents in the Collection
appHis.get("/", async (req, res) => {
    let db = await conx();
    let colleccion = db.collection("historiales");
    let result = await colleccion.find({}).toArray();
    res.send(result);
});

//Get Document by Id
appHis.get("/:id", async (req, res) => {
    let id = parseInt(req.params.id);
    let db = await conx();
    let colleccion = db.collection("historiales");
    let result = await colleccion.find({ id: id }).toArray();
    res.send(result);
});

//Post a Document into a Collection
appHis.post("/insertOne", async (req, res) => {
    try {
        const requiredFields = ['id', 'cantidad', 'id_bodega_origen', 'id_bodega_destino', 'id_inventario', 'created_by', 'updated_by'];
        if (requiredFields.some(field => !req.body[field])) {
            return res.status(400).json({ status: 400, message: "Bad Request", error: 'Missing required fields' });
        }
        const db = await conx();
        const collection = db.collection('historiales');
        await collection.insertOne({
            _id: new ObjectId(),
            ...req.body,
            created_at: new Date(req.body.created_at),
            updated_at: new Date(req.body.updated_at),
        });
        res.status(201).json({ satus: 201, message: "Inserted Data :)" });
    } catch (e) {
        res.status(500).json({ satus: 500, message: "Internal Server Error", error: e.message});
    }
});

//Update One Document by id
appHis.put("/updateOne/:id", async (req, res) => {
    try {
        let id = parseInt(req.params.id);
        const requiredFields = ['id', 'cantidad', 'id_bodega_origen', 'id_bodega_destino', 'id_inventario', 'created_by', 'updated_by'];
        if (requiredFields.some(field => !req.body[field])) {
            return res.status(400).json({ status: 400, message: "Bad Request", error: 'Missing required fields' });
        }
        const db = await conx();
        const collection = db.collection('historiales');
        const updateDocument = {
            $set:{
            ...req.body,
            created_at: new Date(req.body.created_at),
            updated_at: new Date(req.body.updated_at),
        }
        };
        await collection.updateOne({id}, updateDocument);
        res.status(201).json({ satus: 201, message: "Updated Data :)" });
    } catch (e) {
        console.error(e);
        res.status(500).json({ satus: 500, message: `Internal Server Error`, error:e.message });
    }
});


export default appHis;