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
import { Post } from "../models/Post.js";
/** db */
import { connect } from "mongoose";
import { MONGO_URL } from "../setting.js";
import { Reply } from "../models/Reply.js";
const postRouter = Router();
/** upload post */
postRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newPost = new Post(req.body);
    try {
        /** connnect db */
        yield connect(MONGO_URL);
        const savedPost = yield newPost.save();
        res.status(200).json(savedPost);
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
/** update post */
postRouter.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        /** connnect db */
        yield connect(MONGO_URL);
        const findPost = yield Post.findById(req.params.id);
        if (!findPost) {
            res.status(404).json("Post Not Found");
        }
        else {
            if (findPost.user_id !== req.body.user_id) {
                res.status(401).json("Not Your Post");
            }
            else {
                const updatedPost = yield Post.findByIdAndUpdate(req.params.id, {
                    $set: req.body
                }, { new: true });
                res.status(200).json(updatedPost);
            }
        }
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
/** delete post */
postRouter.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        /** connnect db */
        yield connect(MONGO_URL);
        const findPost = yield Post.findById(req.params.id);
        if (!findPost) {
            res.status(404).json("Post Not Found");
        }
        else {
            if (findPost.user_id !== req.body.user_id) {
                res.status(401).json("Not Your Post");
            }
            else {
                yield findPost.delete();
                yield Reply.deleteMany({ post_id: req.params.id });
                res.status(200).json("Delete Your Post");
            }
        }
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
/** get user post */
postRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const findUser = req.params.id;
        const post = yield Post.find({ user_id: findUser });
        post.reverse();
        res.status(200).json(post);
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
/** get user post */
postRouter.get("/single/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = yield Post.find({ _id: req.params.id });
        res.status(200).json(post);
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
/** get all post */
postRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const findUser = req.query.User;
    try {
        /** connnect db */
        yield connect(MONGO_URL);
        let posts;
        if (findUser) {
            /** find user post */
            posts = yield Post.find({ findUser });
        }
        else {
            /** find all post */
            posts = yield Post.find();
        }
        posts.reverse();
        res.status(200).json(posts);
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
export { postRouter };
