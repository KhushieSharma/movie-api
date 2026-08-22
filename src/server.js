import express from "express";
import { config } from "dotenv";
import {connectDB,disconnectDB} from "./config/db.js";
config();
connectDB();
import movieRoutes from "./routes/movieroutes.js";
const app=express();
const port=5001;
app.use("/movies",movieRoutes);
const server=app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
