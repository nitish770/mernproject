import mongoose from "mongoose";

export const Connection = async (username, password) =>{
    const URL = `mongodb://${username}:${password}@ac-qvcdxhc-shard-00-00.brzry7a.mongodb.net:27017,ac-qvcdxhc-shard-00-01.brzry7a.mongodb.net:27017,ac-qvcdxhc-shard-00-02.brzry7a.mongodb.net:27017/MERNECOMERS?ssl=true&replicaSet=atlas-w8z225-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true});
        console.log('Database connect Success atls');
    } catch (error) {
        console.log('Error while connecting with the database', error.message);
    }
}

export default Connection;