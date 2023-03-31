import Express from "express";
import { userModel } from "../models/user.model.js";
const userRouter = express.Router();

userRouter.post("/signup", async (req, res) => {
  try {
    const { passwordHash } = req.body;

    if (!passwordHash) {
      return res.status(400).json({ msg: "acesso invalido" });
    }
  } catch (err) {
    console.log(err);
  }
});

export { userRouter };
