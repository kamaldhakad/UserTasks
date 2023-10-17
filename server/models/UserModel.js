import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  fathername: {
    type: String,
    required: [true, "Fathername is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  phoneCode: {
    type: Number,
    required: [true, "Country Code is required"],
  },
  phone: {
    type: Number,
    required: [true, "Phone is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
});

const UserModel = mongoose.model("User", UserSchema);

export default UserModel;
