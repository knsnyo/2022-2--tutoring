/** import module */
import express from "express";
import path from "path";
/** import router */
import { authRouter } from "./routes/auth.js";
import { postRouter } from "./routes/post.js";
import { replyRouter } from "./routes/reply.js";
import { uploadRouter } from "./routes/upload.js";
import { userRouter } from "./routes/user.js";
const app = express();
app.use(express.json());
const __dirname = path.resolve()
app.use("/image", express.static(path.join(__dirname, "/upload")));
/** router */
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/post", postRouter);
app.use("/api/upload", uploadRouter);
app.use("/api/reply", replyRouter);
/** Start Server */
app.listen(5000, () => {
    console.log("backend running");
});
