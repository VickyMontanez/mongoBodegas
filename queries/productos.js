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
};

export async function postProduct(req, res){
    try {
        const data = req.body;
        const defaultQuantity = 100;

        let db = await conx();
        let productosColleccion = db.collection("productos");
        const dataProduct = {
            _id: new ObjectId(),
            ...data,
            created_at: new Date(req.body.created_at),
            updated_at: new Date(req.body.updated_at)
        };
        await productosColleccion.insertOne(dataProduct);

        let inventariosColleccion = db.collection("inventarios");
        const inventoryEntry = {
            id: data.id,
            id_bodega: 1,
            id_producto: data.id,
            cantidad: defaultQuantity,
            created_by: data.created_by,
            updated_by: data.updated_by,
            created_at: new Date(req.body.created_at),
            updated_at: new Date(req.body.updated_at)
        };
        await inventariosColleccion.insertOne(inventoryEntry);
        res.send({ status: 200, message: "Product inserted and inventory updated successfully :)" });
    } catch (e) {
        console.log(e);
        res.status(500).send({ status: 500, message: "Internal Server Error :(", error: e.errInfo });
    }
};
