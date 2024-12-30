import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    email: String,
    image: String,
    bio: String,
})

export default mongoose.models.User || mongoose.model("User", userSchema);