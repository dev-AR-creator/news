import {PrismaClient} from "@prisma/client"

const prisma= new PrismaClient();


export default defineEventHandler(async (event) =>{
   

    return prisma.pos.findMany({
       
        select:{
            id: true,
            title: true,
            art: true,
            image: true,
            writer: true,
            view: true,
            veri: true
        }
    });

    

    

});