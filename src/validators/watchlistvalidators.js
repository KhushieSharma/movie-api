import {z} from 'zod'
const addtowatchlistschema=z.object({
    movieId:z.string().uuid(),
    status:z.enum(["PLANNED","WATCHING","COMPLETED","DROPPED"],{
        error:()=>({message:"status mus be one of mentioned"}),
    }).optional(),
    rating:z.coerce.number().int("Rating must be an int").min(1).max(10).optional(),
    notes:z.string().optional(),
});
export {addtowatchlistschema};