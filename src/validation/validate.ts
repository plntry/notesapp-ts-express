import * as yup from "yup";
import { Request, Response, NextFunction } from "express";

const validate = (schema: yup.AnySchema) => async (req: Request, res: Response, next: NextFunction) => {
    try {
        await schema.validate({
            body: req.body,
            query: req.query,
            params: req.params
        })

        next();
    } catch (e: any) {
        return res.status(400).send(e.message);
    }
}

export default validate;