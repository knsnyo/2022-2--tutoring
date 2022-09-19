/** import module */
import express from "express"

/** import router */
import { authRouter } from "./routes/auth"
import { userRouter } from "./routes/user"

const app = express()
app.use(express.json())

/** router */
app.use("/api/auth", authRouter)
app.use("/api/user", userRouter)

/** Start Server */
app.listen(5000, () => {
	console.log("backend running")
})