import mongoose from 'mongoose';
import colors from 'colors';
const MONGO_URL="mongodb+srv://admin:iws80kLjcsNX4PtI@cluster0.qdpvgsi.mongodb.net/?retryWrites=true&w=majority"
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`Error: ${error.message}`.red.bold);
    process.exit();
  }
};



export default connectDB;