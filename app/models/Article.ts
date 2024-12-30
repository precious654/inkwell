import mongoose from "mongoose";

const articleSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    description: String,
    author: {type: String, ref: "User", required: true},
    image: String,
    content: String,
    views: Number,
}, {
    timestamps: true,
})

export default mongoose.models.Article || mongoose.model("Article", articleSchema);