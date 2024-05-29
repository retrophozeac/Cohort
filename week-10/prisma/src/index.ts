import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(username:string,password:string,firstName:string,lastName:string) {   

    const res = await prisma.user.create({
        data:{
            username,
            firstName,
            lastName,
            password
        },
        select:{
            id:true,
            password:true
        }
    }
    )
    console.log(res);
    
}
insertUser("masand1@gmail.com","masand","Gaurav","Masand");
