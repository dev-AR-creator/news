import {PrismaClient} from "@prisma/client"

const prisma= new PrismaClient();


export default defineEventHandler(async (event) =>{
   const {userid} =event.context.params;


    return prisma.pos.findMany({
        where:{
            id: parseInt(userid),
            
            
        }
    });

    

    

});