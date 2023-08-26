"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
class Middleware {
    handleValidationError(req, res, next) {
        //Abort Request if validation error exists
        const error = (0, express_validator_1.validationResult)(req);
        if (!error.isEmpty()) {
            console.log(error.array());
            return res.status(400).json(error.array());
        }
        next();
    }
}
exports.default = new Middleware();
