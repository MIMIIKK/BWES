import mongoose from "mongoose";

export const connection = () =>{
    mongoose.connect(process.env.MONGO_URL,{
        dbName: "BWES"
    }).then(() =>{
        console.log("Database connected")
    }).catch(err=>{
        console.log(`Error occured in database connection: ${err}`)
    })
}