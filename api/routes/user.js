var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Router } from "express";
import { User } from "../models/User.js";
import { genSalt, hash } from "bcrypt";
/** db */
import { connect } from "mongoose";
import { MONGO_URL, SALT } from "../setting.js";
import { Post } from "../models/Post.js";
import { Reply } from "../models/Reply.js";
const userRouter = Router();
/** update */
userRouter.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.body._id === req.params.id) {
        if (req.body.password) {
            const salt = yield genSalt(SALT);
            req.body.password = yield hash(req.body.password, salt);
        }
        try {
            /** connnect db */
            yield connect(MONGO_URL);
            /** find account */
            const updatedUser = yield User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            }, { new: true });
            res.status(200).json(updatedUser);
        }
        catch (err) {
            res.status(500).json(err);
        }
    }
    else {
        res.status(401).json("Not your account");
    }
}));
/** delete */
userRouter.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.body._id === req.params.id) {
        try {
            /** connnect db */
            yield connect(MONGO_URL);
            const deleteUser = yield User.findById(req.params.id);
            if (!deleteUser) {
                res.status(404).json("User Not Found");
            }
            else {
                yield Post.deleteMany({ user_id: deleteUser._id });
                yield Reply.deleteMany({ user_id: deleteUser._id });
                yield User.findByIdAndDelete(req.params.id);
                res.status(200).json("Delete Your Account");
            }
        }
        catch (err) {
            res.status(500).json(err);
        }
    }
    else {
        res.status(401).json("Not Your Account");
    }
}));
/** get user info */
userRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        /** connnect db */
        yield connect(MONGO_URL);
        const findUser = yield User.findById({ _id: req.params.id });
        res.status(200).json(findUser);
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
export { userRouter };
