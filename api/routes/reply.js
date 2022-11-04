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
import { Reply } from "../models/Reply.js";
/** db */
import { connect } from "mongoose";
import { MONGO_URL } from "../setting.js";
const replyRouter = Router();
replyRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newReply = new Reply(req.body);
    try {
        /** connnect db */
        yield connect(MONGO_URL);
        const savedReply = yield newReply.save();
        res.status(200).json(savedReply);
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
replyRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        /** connnect db */
        yield connect(MONGO_URL);
        const findPostId = req.params.id;
        const reply = yield Reply.find({ post_id: findPostId });
        res.status(200).json(reply);
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
export { replyRouter };
