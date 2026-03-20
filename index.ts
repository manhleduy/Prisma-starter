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
    return res.json(user);
})
app.post("/users", async (req, res)=>{
    const user= req.body;
    
    const newUser= await prisma.user.create({
        data: {...user}
    })
    return res.json(newUser);
})
app.get("/posts", async (_, res)=>{
    const fetchData= await prisma.post.findMany({
        include:{
            author: true
        }
    })
    return res.json(fetchData);
})
app.get("/statis/posts", async(_, res)=>{
    const groupedData= await prisma.post.groupBy({
        by:['authorId'],
        _sum:{
            id: true 
        },
        _count:{
            _all: true
        },
        orderBy:{
        
        }


    })
    return res.json(groupedData);
})

app.post("/posts", async (req: Request, res)=>{
    const post= req.body;
    const data= await prisma.post.create({
        data: {...post}
    })
    return res.json(data);
})
app.post("/homes/:id", async (req: Request, res)=>{
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

    
app.get("/homes", async(_,res)=>{   

    const homes= await prisma.home.findMany();
    return res.json(homes);

})
app.post("/cars", async(req: Request, res)=>{
    const car= req.body;
    const result= await prisma.car.create({
        data: {...car}
    })
    return res.json(result);
})
app.get("/cars", async(__,res)=>{
    const cars= await prisma.car.findMany()
    return res.json(cars)
})
app.listen(4000,()=>{
    console.log("server is running on port 3000");

})