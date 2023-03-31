import express from "express";
import { userModel } from "../models/user.model.js";
import bcrypt from "bcrypt";

const SALT_AROUND = 10;
const userRouter = express.Router();

userRouter.post("/signup", async (req, res) => {
  try {
    const { passwordHash } = req.body;

    if (!passwordHash) {
      return res.status(400).json({ msg: "acesso invalido" });
    }

    const salt = await bcrypt.genSalt(SALT_AROUND);
    const passw = await bcrypt.hash(passwordHash, salt);

    const createdUser = await userModel.create({
      ...req.body,
      hashedpassword: passw,
    });

    delete createdUser._doc.hashedpassword;

    return res.status(201).json(createdUser);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

export { userRouter };
