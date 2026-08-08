import mongoose from "mongoose";

const connectDB = async () => {

    mongoose.connection.on( 'connected' , ()=>{
        console.log('DB CONNECTED SUCCESSFULLY');
    })

    await mongoose.connect(process.env.MONGOOSE_URI)

}

export default connectDB;