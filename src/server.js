import express from "express";
import {connectDB,disconnectDB} from "./config/db.js";
import authRoutes from "./routes/authroutes.js";
import movieRoutes from "./routes/movieroutes.js";
import watchlistRoutes from "./routes/watchlistroutes.js";
const app=express();
const port=5001;
//body parsing middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/auth",authRoutes);
app.use("/movies",movieRoutes);
app.use("/watchlist",watchlistRoutes);
const server=app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
