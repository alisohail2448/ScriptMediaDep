import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import AuthRoute from './Routes/AuthRoute.js'
import UserRoute from './Routes/UserRoute.js'
import PostRoute from './Routes/PostRoute.js'
import UploadRoute from './Routes/UploadRoute.js'
import ChatRoute from './Routes/ChatRoute.js'
import MessageRoute from './Routes/MessageRoute.js'

// Routes


const app = express();

app.use(express.static('public'));
app.use('/images', express.static("images"));

// Middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors())
dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGO_URL = "mongodb://socialmedia:socialmedia@ac-jgm7hor-shard-00-00.i5c6b0l.mongodb.net:27017,ac-jgm7hor-shard-00-01.i5c6b0l.mongodb.net:27017,ac-jgm7hor-shard-00-02.i5c6b0l.mongodb.net:27017/SocialMedia-FullStack?ssl=true&replicaSet=atlas-ybwcz8-shard-0&authSource=admin&retryWrites=true&w=majority"


// const PORT = process.env.PORT || 5000;



mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen( PORT, () =>
      console.log(`Listening at ${process.env.PORT}`)
    )
  )
  .catch((error) => console.log(error));

  if(process.env.NODE_ENV == "production"){
    app.use(express.static("client/build"));
  }

  // usage of routes
  app.use('/auth', AuthRoute);
  app.use('/user', UserRoute);
  app.use('/post', PostRoute);
  app.use('/upload', UploadRoute);
  app.use('/chat', ChatRoute);
  app.use('/message', MessageRoute);