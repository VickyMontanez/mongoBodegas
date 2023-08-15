import 'reflect-metadata';
import {plainToClass, classToPlain} from 'class-transformer';
import {validate} from 'class-validator';
import { Historial} from "../dtocontroller/historiales.js";
import { Router } from "express";
import { DTO } from '../limit/token.js';

const appMiddlewareVerifyHistoriales = Router();
const appDTOData = Router();


appMiddlewareVerifyHistoriales.use((req, res, next) => {
    if (!req.rateLimit) return;
    let { payload } = req.data;
    const { iat, exp, ...newPayload } = payload;
    payload = newPayload;
    let Clone = JSON.stringify(classToPlain(plainToClass(Historial, {}, { ignoreDecorators: true })));
    let Verify = Clone === JSON.stringify(payload);
    (!Verify) ? res.status(406).send({ status: 406, message: "No Autorizado" }) : next()
});

appDTOData.use( async(req,res,next) => {
    try {
        let data = plainToClass(DTO('historiales').class, req.body);
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        req.data = undefined;
        next();
    } catch (err) {
        res.status(err.status).send(err)
    }
});

export {
    appMiddlewareVerifyHistoriales,
    appDTOData
};