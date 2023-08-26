"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
class MovieValidator {
    checkCreateMovieReq() {
        return [
            (0, express_validator_1.body)('title')
                .notEmpty()
                .withMessage('title is required')
                .isString()
                .withMessage('Value of title must be a string'),
            (0, express_validator_1.body)('genre')
                .notEmpty()
                .withMessage('genre is required')
                .isString()
                .withMessage('Value of genre must be a string'),
            (0, express_validator_1.body)('director')
                .optional()
                .isString()
                .withMessage('Value of director must be a string'),
            (0, express_validator_1.body)('country')
                .optional()
                .isString()
                .withMessage('Value of country must be a string'),
            (0, express_validator_1.body)('plotSummary')
                .notEmpty()
                .withMessage('plotSummary field is required')
                .isString()
                .withMessage('plotSummary field must be a string'),
            (0, express_validator_1.body)('posterURL')
                .notEmpty()
                .withMessage('posterURL field is required')
                .isString()
                .withMessage('posterURL value must be a string'),
            (0, express_validator_1.body)('trailerURL')
                .optional()
                .isString()
                .withMessage('trailerURL value must be a string'),
            (0, express_validator_1.body)('rating')
                .optional()
                .isNumeric()
                .withMessage('rating value must be a number'),
            (0, express_validator_1.body)('releaseYear')
                .notEmpty()
                .withMessage('releaseYear field is required.')
                .isString()
                .withMessage('releaseYear value must be a year e.g 2023'),
            (0, express_validator_1.body)('releaseDate').optional().isDate(),
        ];
    }
    checkParamId() {
        return [
            (0, express_validator_1.param)('id')
                .notEmpty()
                .withMessage('Param id is required')
                .isMongoId()
                .withMessage('Param id is invalid'),
        ];
    }
}
exports.default = new MovieValidator();
