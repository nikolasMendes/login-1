import mongoose from "mongoose";

export async function ConnectToDB() {
  try {
    mongoose.set("strictQuery", false);

    const dbConnect = await mongoose.connect(process.env.MONGODB_URI);

    console.log(`Conncected to db:${dbConnect.connection.name}`);
  } catch (err) {
    console.log(err);
  }
}
