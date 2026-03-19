import express, {type Request } from 'express'
import { prisma } from './prisma/client.ts';

const app=express();
app.use(express.json());


app.get("/users", async (req, res)=>{
    const users= await prisma.user.findMany();
    res.json(users);
})
app.get("/users/:id", async (req, res)=>{
    const user= await prisma.user.findFirst({
        where:{
            id: Number(req.params.id)
        }
    })
    res.json(user);
})
app.post("/users/homes/:id", async (req: Request, res)=>{
    const home= req.body;
    await prisma.user.update({
        where:{
            id: Number(req.params.id)
        },
        data:{
            homes:{
                create:{...home}
            }
        }
    })
})
app.post("/users", async (req, res)=>{
    const user= req.body;
    
    const newUser= await prisma.user.create({
        data: {...user}
    })
    res.json(newUser);
})
    
app.get("/users/homes", async(req,res)=>{   
    const homes= await prisma.home.findMany({});
    res.json(homes);

})

app.listen(4000,()=>{
    console.log("server is running on port 3000");

})