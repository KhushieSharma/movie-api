import { prisma } from "../config/db.js";

const addtowatchlist=async(req,res)=>{
    const {movieId,status,rating,notes}=req.body;
    const movie=await prisma.movie.findUnique({
        where:{
            id:movieId}});
            if(!movie){
                return res.status(404).json({message:"Movie not found"});   
            }
        const existingwatchlist=await prisma.watchlistItem.findUnique({
            where:{userId_movieId:{userId:req.user.id,movieId:movieId,}},
        });
        if(existingwatchlist){
            return res.status(400).json({message:"Movie already in watchlist"});   
        }
        const watchlistItem=await prisma.watchlistItem.create({
            data:{
                userId:req.user.id,
                movieId,
                status:status || "PLANNED",
                rating,
                notes,
            },
        });
        res.status(201).json({message:"Movie added to watchlist",watchlistItem});


};
const removefromwatchlist=async(req,res)=>{
const watchlistItem=await prisma.watchlistItem.findUnique({
    where:{id:req.params.id},
});
    if(!watchlistItem){
        return res.status(404).json({error:"watchlist item not found"});

    }
    if(watchlistItem.userId!==req.user.id){
        return res.status(403).json({error:"not allowed"});
    }
    await prisma.watchlistItem.delete({
        where:{
            id:req.params.id
        },
    });
    res.status(200).json({status:"success", message:"movie removed from watchlist"});
};
export {addtowatchlist, removefromwatchlist};