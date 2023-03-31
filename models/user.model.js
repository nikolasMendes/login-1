import { Schema, model } from "mongoose";

const userSchema = new Schema({
  nome: { type: String, required: true },
  sobrenome: { type: String, requiered: true },
  cargo: { type: String, required: true },
  idade: { type: Number, required: true },
  nivel: { type: String, required: true },
  ativo: { type: Boolean, requiered: true },
  passwordHash: { type: String, required: true },
  role: { type: String, enum: ["ADMIN", "USER"], default: "USER" },
});

export const userModel = model("User", userSchema);
