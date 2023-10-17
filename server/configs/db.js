import mongoose from "mongoose";

const ConnectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/codes");
    console.log("DB Connected ...");
  } catch (error) {
    console.log("Error in Database connection", error);
  }
};

export default ConnectDB;
