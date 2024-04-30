import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import { connectToDB } from './src/config/connectDB.js';
import router from './src/routers/taskRouter.js';

const server = express();

server.use(express.json());
// for data passed inside the url
server.use(express.urlencoded({
    extended: true
}));

// setting up routes
server.use('/', router);

server.listen(process.env.PORT, async() => {
    console.log(`server is running on port:${process.env.PORT}`);
    await connectToDB();
});

export default server;