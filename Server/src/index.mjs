import express from 'express';
import dotenv from 'dotenv';
import dogs from './dogs.js';

dotenv.config();
const app = express();


app.get("/Dogs",(req,res)=>{
  res.send(dogs)
})


const PORT = process.env.PORT || 3000;
app.listen(PORT ,()=>{
  console.log(`server is running on ${PORT}`)
});

