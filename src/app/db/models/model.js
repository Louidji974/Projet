import mongoose from "mongoose"
import { addressSchema } from "./schemas/addressSchema"

export const addressModel =
  mongoose.models.address || mongoose.model("Todo", addressSchema)
