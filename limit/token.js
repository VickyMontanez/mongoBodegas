import 'reflect-metadata';
import {plainToClass, classToPlain } from 'class-transformer';
import dotenv from 'dotenv';
import {Router} from 'express';
import { SignJWT, jwtVerify } from 'jose';
import {Historial} from "../dtocontroller/historiales.js";
import { Bodega } from '../dtocontroller/bodegas.js';
import { Producto } from '../dtocontroller/producto.js'
import { Inventario } from '../dtocontroller/inventarios.js';

dotenv.config();
const appToken = Router();
const appVerify = Router();


const DTO = (p1) =>{
    const match = {
        'historiales': Historial,
        'bodegas': Bodega,
        'productos': Producto,
        'inventarios': Inventario
    };  
    const instan = match[p1];
    if(!instan) throw {status:404, error:"Not Found", message:"Invalid Token :("}
    return {atributos: plainToClass(instan, {},{ ignoreDecorators:true }), class: instan}  
};

appToken.use("/:collection", async(req,res)=>{
    try {
        let inst = DTO(req.params.collection).atributos;
        const encoder = new TextEncoder();
        const jwtconstructor = new SignJWT(Object.assign({}, classToPlain(inst)));
        const jwt = await jwtconstructor
        .setProtectedHeader({alg:"HS256", typ: "JWT"})
        .setIssuedAt()
        .setExpirationTime("30m")
        .sign(encoder.encode(process.env.JWT_PRIVATE_KEY));
        req.data = jwt;
        res.status(201).send({status: 201, message:"Created", result: jwt});
    } catch (e) {
        res.status(404).send({status: 404, error:"Not Found", message: e.error});
    }
})

appVerify.use("/", async(req,res,next)=>{
    const {authorization} = req.headers;
    if (!authorization) return res.status(400).send({status: 400, token: "Missing Authorization Token :("});
    try {
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(
            authorization,
            encoder.encode(process.env.JWT_PRIVATE_KEY)
        );
        req.data = jwtData;
        next();
    } catch (error) {
        res.status(498).send({status: 498, token: "The Token Has Expired :("});
    }
})

export {
    appToken,
    appVerify,
    DTO
};