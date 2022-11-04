import { Router, Request, Response } from "express"
import { User } from "../models/User"
import { genSalt, hash } from "bcrypt"

/** db */
import { connect } from "mongoose"
import { MONGO_URL, SALT } from "../setting"
import { Post } from "../models/Post"
import { Reply } from "../models/Reply"

const userRouter: Router = Router()

/** update */
userRouter.put("/:id", async (req: Request, res: Response) => {
	if (req.body._id === req.params.id) {
		if (req.body.password) {
			const salt = await genSalt(SALT)
			req.body.password = await hash(req.body.password, salt)
		}
		try {
			/** connnect db */
			await connect(MONGO_URL)

			/** find account */
			const updatedUser = await User.findByIdAndUpdate(req.params.id, {
				$set: req.body,
			}, { new: true })
			res.status(200).json(updatedUser)
		} catch (err: unknown) {
			res.status(500).json(err)
		}
	} else {
		res.status(401).json("Not your account")
	}
})

/** delete */
userRouter.delete("/:id", async (req: Request, res: Response) => {
	if (req.body._id === req.params.id) {
		try {
			/** connnect db */
			await connect(MONGO_URL)

			const deleteUser = await User.findById(req.params.id)
			if (!deleteUser) {
				res.status(404).json("User Not Found")
			} else {
				await Post.deleteMany({ user_id: deleteUser._id})
				await Reply.deleteMany({ user_id: deleteUser._id})
				await User.findByIdAndDelete(req.params.id)
	
				res.status(200).json("Delete Your Account")
			}
		} catch (err: unknown) {
			res.status(500).json(err)
		}
	} else {
		res.status(401).json("Not Your Account")
	}
})

/** get user info */
userRouter.get("/:id", async (req: Request, res: Response) => {
	try {
		/** connnect db */
		await connect(MONGO_URL)

		const findUser = await User.findById({_id: req.params.id})
		res.status(200).json(findUser)
	} catch (err: unknown) {
		res.status(500).json(err)
	}
})

export { userRouter }