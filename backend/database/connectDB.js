import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      //useCreateIndex: true,
      //useFindAndModify: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("DB was connected successfully");
  } catch (error) {
    console.log(`Error ${error.message}`);
  }
};
export default connectDB;
