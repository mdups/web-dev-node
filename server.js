import express from 'express';
import cors from 'cors';
import tuitController from "./controllers/tuits-controller.js";
import mongoose from 'mongoose';

const CONNECTION_STRING = "mongodb+srv://mdups:footballcup@webdev.lflsf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
 || 'mongodb://localhost:27017/webdev'
mongoose.connect(CONNECTION_STRING);

const app = express();
app.listen(process.env.PORT || 4000);
app.use(cors());
app.use(express.json());


tuitController(app);
app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})


