import { Schema, model } from "mongoose";
const ReplySchema = new Schema({
    description: {
        type: String,
        required: true,
    },
    user_id: {
        type: String,
        required: true,
    },
    post_id: {
        type: String,
        required: true,
    },
}, { timestamps: true });
const Reply = model("replys", ReplySchema);
export { Reply };
