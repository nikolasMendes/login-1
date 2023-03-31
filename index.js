import express from "express";
import * as dotenv from "dotenv";
import { ConnectToDB } from "./config/db.config.js";
import { userRouter } from "./routes/user.routes.js";

dotenv.config();

ConnectToDB();
const app = express();

app.use(express.json);
app.use("/user", userRouter);

app.listen(Number(process.env.PORT), () => {
  console.log(`Server up and runnig at port ${process.env.PORT}`);
});
