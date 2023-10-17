import UserModel from "./../models/UserModel.js";

// CREATE USER
export const CreateUser = async (req, res) => {
  try {
    const { name, fathername, email, phoneCode, phone, password } = req.body;

    const isUserExist = await UserModel.findOne({ email });

    if (isUserExist) {
      return res.status(404).send({
        success: false,
        message: "User is already exist with this email",
      });
    }

    const user = await UserModel.create({
      name,
      fathername,
      email,
      phoneCode,
      phone,
      password,
    });
    res.status(201).send({
      success: true,
      message: "User Created",
      user,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Server Error",
    });
  }
};

// LOGIN USER
export const LoginUser = async (req, res) => {
  try {
    const { emailMobile, password } = req.body;

    const isUserExist = await UserModel.findOne({ email: emailMobile });

    if (isUserExist) {
      if (isUserExist.password == password) {
        return res.status(200).send({
          success: true,
          message: "Login Successfully",
          user: isUserExist,
        });
      }
      return res.status(404).send({
        success: false,
        message: "Password is not correct",
      });
    }

    return res.status(404).send({
      success: false,
      message: "User is not exist",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Server Error",
    });
  }
};
