import {PrismaClient} from "@prisma/client"

const prisma= new PrismaClient();

export default defineEventHandler(async (event) =>{
    const body = await readBody(event);

    

    const car =await prisma.pos.create({
        data:body
     


        }
           
           
        
      )

    

});