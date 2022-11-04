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
import { compare, genSalt, hash } from "bcrypt";
/** db */
import { connect } from "mongoose";
import { MONGO_URL, SALT } from "../setting.js";
const authRouter = Router();
/** register */
authRouter.post("/register", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        /** connnect db */
        yield connect(MONGO_URL);
        /** hash */
        const salt = yield genSalt(SALT);
        const hashedPassword = yield hash(req.body.password, salt);
        /** data */
        const newUser = new User({
            id: req.body.id,
            username: req.body.username,
            password: hashedPassword,
        });
        /** insert data */
        const user = yield newUser.save();
        res.status(200).json(user);
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
/** login */
authRouter.post("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        /** connnect db */
        yield connect(MONGO_URL);
        /** find user */
        const user = yield User.findOne({ id: req.body.id });
        /** no user */
        if (!user) {
            res.status(404).json("Member Not Found");
        }
        else {
            /** compare password */
            const validated = yield compare(req.body.password, user.password);
            /** wrong password */
            if (!validated) {
                res.status(400).json("Wrong password");
            }
            else {
                res.status(200).json(user);
            }
        }
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
export { authRouter };
