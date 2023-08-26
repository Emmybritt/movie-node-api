import { body, param } from 'express-validator';

class MovieValidator {
    checkCreateMovieReq() {
        return [
            body('title')
                .notEmpty()
                .withMessage('title is required')
                .isString()
                .withMessage('Value of title must be a string'),
            body('genre')
                .notEmpty()
                .withMessage('genre is required')
                .isString()
                .withMessage('Value of genre must be a string'),

            body('director')
                .optional()
                .isString()
                .withMessage('Value of director must be a string'),
            body('country')
                .optional()
                .isString()
                .withMessage('Value of country must be a string'),
            body('plotSummary')
                .notEmpty()
                .withMessage('plotSummary field is required')
                .isString()
                .withMessage('plotSummary field must be a string'),
            body('posterURL')
                .notEmpty()
                .withMessage('posterURL field is required')
                .isString()
                .withMessage('posterURL value must be a string'),
            body('trailerURL')
                .optional()
                .isString()
                .withMessage('trailerURL value must be a string'),
            body('rating')
                .optional()
                .isNumeric()
                .withMessage('rating value must be a number'),
            body('releaseYear')
                .notEmpty()
                .withMessage('releaseYear field is required.')
                .isString()
                .withMessage('releaseYear value must be a year e.g 2023'),
            body('releaseDate').optional().isDate(),
        ];
    }
    checkParamId() {
        return [
            param('id')
                .notEmpty()
                .withMessage('Param id is required')
                .isMongoId()
                .withMessage('Param id is invalid'),
        ];
    }
}

export default new MovieValidator();
