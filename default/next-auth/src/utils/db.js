const { default: mongoose } = require("mongoose")

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log('Connect database');
    } catch (error) {
        console.log(error.message);
    }
}

export default connectDb;