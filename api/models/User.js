import { Schema, model } from "mongoose";
const UserSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    profilePic: {
        type: String,
        default: "",
    },
    intro: {
        type: String,
        default: "",
    },
    like: {
        type: Array,
        defalut: []
    }
}, { timestamps: true });
const User = model("users", UserSchema);
export { User };
