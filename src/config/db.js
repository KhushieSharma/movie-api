// import {PrismaClient} from '@prisma/client';
// const prisma=new PrismaClient({
//     log:process.env.NODE_ENV==='development'?['query','info','warn','error']:['error']
// });
// const connectDB=async()=>{
//     try{
//         await prisma.$connect();
//         console.log('Database connected');
//     }catch(err){
//         console.log(err);
//         process.exit(1);
//     }};
// const disconnectDB=async()=>{
//     await prisma.$disconnect();    
// }; 

// export { prisma, connectDB, disconnectDB };
import "dotenv/config";
import {PrismaClient} from "../generated/prisma/client.js";
import {PrismaPg} from "@prisma/adapter-pg";

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL
});

const prisma=new PrismaClient({
    adapter,
    log:process.env.NODE_ENV==='development'?['query','info','warn','error']:['error']
});

const connectDB=async()=>{

    try{

        await prisma.$connect();

        console.log('Database connected');

    }catch(err){

        console.log(err);

        process.exit(1);

    }
};

const disconnectDB=async()=>{

    await prisma.$disconnect();    

}; 

export { prisma, connectDB, disconnectDB };