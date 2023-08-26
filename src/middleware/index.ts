import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';

class Middleware {
    handleValidationError(req: Request, res: Response, next: NextFunction) {
        //Abort Request if validation error exists
        const error = validationResult(req);
        if (!error.isEmpty()) {
            console.log(error.array());
            return res.status(400).json(error.array());
        }
        next();
    }
}

export default new Middleware();
