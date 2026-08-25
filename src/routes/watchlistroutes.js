import express from "express";
import {register, login, logout} from "../controllers/authcontroller.js";
import {addtowatchlist, removefromwatchlist} from "../controllers/watchlistcontroller.js";
import {authmiddlware} from "../middleware/authmiddleware.js";
import { validaterequest } from "../middleware/validaterequest.js";
import { addtowatchlistschema } from "../validators/watchlistvalidators.js";
const router=express.Router();
router.use(authmiddlware);
router.post("/",validaterequest(addtowatchlistschema),addtowatchlist);
router.delete("/:id",removefromwatchlist) //send id thru params, watchlist/:id
export default router;