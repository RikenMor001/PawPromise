import {Router} from "express"
import dogs from '../dogs.js'
const router = Router();

router.get("/api/findDogs",(req,res)=>{
  res.send(dogs)
})

export default router;