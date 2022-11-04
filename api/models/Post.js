import { Schema, model } from "mongoose";
const PostSchema = new Schema({
    description: {
        type: String,
        required: true,
    },
    user_id: {
        type: String,
        required: true,
    },
    like: {
        type: Number,
        default: 0
    },
    postPic: {
        type: Array,
        required: true
    },
}, { timestamps: true });
const Post = model("posts", PostSchema);
export { Post };
