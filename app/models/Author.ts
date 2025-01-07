import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
    githubId: {type: String, required: true},
    name: String,
    email: String,
    image: String,
    bio: String,
})

export default mongoose.models.User || mongoose.model("Author", authorSchema);