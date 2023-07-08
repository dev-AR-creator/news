import {PrismaClient} from "@prisma/client"

const prisma= new PrismaClient();


export default defineEventHandler(async (event) =>{
    const {user} =event.context.params;

    return prisma.pos.findMany({
        where:{
            user: user
        },
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






