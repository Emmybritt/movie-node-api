import mongoose from 'mongoose';
import config from './env.config';

const options = {
    autoIndex: true,
    serverSelectionTimeoutMS: 500,
    socketTimeoutMS: 450,
    family: 4,
};

async function connectDb() {
    try {
        if (mongoose.connection.readyState !== 1) {
            await mongoose.connect(config.databaseUrl);
            console.log('Database connected');
        } else {
            console.log(' Database already connected');
        }
    } catch (error) {
        console.log(error);
    }
}

export default connectDb;
