import mongoose from "mongoose"
const connectionDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log('connect DB');
    } catch (error) {
        console.log("DB connect fail");
    }
}

export default connectionDb;