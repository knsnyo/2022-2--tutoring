/** import module */
import express from "express"
import path from "path"

/** import router */
import { authRouter } from "./routes/auth"
import { postRouter } from "./routes/post"
import { uploadRouter } from "./routes/upload"
import { userRouter } from "./routes/user"

const app = express()
app.use(express.json())
app.use("/image", express.static(path.join(__dirname, "/upload")))

/** router */
app.use("/api/auth", authRouter)
app.use("/api/user", userRouter)
app.use("/api/post", postRouter)
app.use("/api/upload", uploadRouter)

/** Start Server */
app.listen(5000, () => {
	console.log("backend running")
})