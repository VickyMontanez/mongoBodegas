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
        let query = [
            {
                $lookup: {
                    from: "inventarios",
                    localField: "id",
                    foreignField: "id_producto",
                    as: "Total"
                }
            },
            {
                $match: {
                    "Total": { $ne: [] }
                }
            },
            {
                $unwind: "$Total"
            },
            {
                $group: {
                    _id: "$id",
                    nombre: { $first: "$nombre" },
                    descripcion: { $first: "$descripcion" },
                    estado: { $first: "$estado" },
                    created_by: { $first: "$created_by" },
                    created_at: { $first: "$created_at" },
                    updated_at: { $first: "$updated_at" },
                    Total: { $sum: "$Total.cantidad" }
                }
            },
            {
                $sort: {
                    "Total": -1
                }
            }
        ];
        let result = await colleccion.aggregate(query).sort({nombre: 1}).toArray();
        res.send(result);
    } catch (error) {
        res.status(404).send({ status:404, message: "Query Not Found :(" })
    }
}