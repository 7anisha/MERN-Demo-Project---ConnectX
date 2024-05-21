const mongoose =require("mongoose")
// const URI ="mongodb://0.0.0.0:27017/test"
// const URI ="mongodb+srv://2021pietcsanisha021:019k12ihD17kI4xA@first.avyfhdv.mongodb.net/db1?retryWrites=true&w=majority&appName=first"
const URI =process.env.MONGODB;

const connectDB = async ()=>{
    try {
        await mongoose.connect(URI);
        console.log("DB Connection Success")
    } catch (error) {
        console.error("DB connection failed");
        console.log(error)
        process.exit(1);
        
    }
};

module.exports =connectDB;