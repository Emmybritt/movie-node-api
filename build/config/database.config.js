"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const env_config_1 = __importDefault(require("./env.config"));
const options = {
    autoIndex: true,
    serverSelectionTimeoutMS: 500,
    socketTimeoutMS: 450,
    family: 4,
};
async function connectDb() {
    try {
        if (mongoose_1.default.connection.readyState !== 1) {
            await mongoose_1.default.connect(env_config_1.default.databaseUrl);
            console.log('Database connected');
        }
        else {
            console.log(' Database already connected');
        }
    }
    catch (error) {
        console.log(error);
    }
}
exports.default = connectDb;
