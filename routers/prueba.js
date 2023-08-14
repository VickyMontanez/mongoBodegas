import express from "express";
import { conx } from "../db_mg/atlas.js";

const prueba = express();
prueba.use(express.json());

prueba.get("/", async (req, res) => {
    let db = await conx();
    let colleccion = db.collection("bodegas");
    let result = await colleccion.find({}).toArray();
    res.send(result);
});


export default prueba;