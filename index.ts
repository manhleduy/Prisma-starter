import express from 'express'
import { prisma } from './prisma/client.ts';

const app=express();
app.use(express.json());


app.get("/users", async (req, res)=>{
    const users= await prisma.user.findMany();
    res.json(users);
})
app.listen(4000,()=>{
    console.log("server is running on port 3000");

})