import { Router, Request, Response } from "express"
import { User } from "../models/User"
import { compare, genSalt, hash } from "bcrypt"


/** db */
import { connect } from "mongoose"
import { MONGO_URL } from "../setting"

const authRouter: Router = Router()

/** register */
authRouter.post("/register", async (req: Request, res: Response) => {
	try {
		/** connnect db */
		await connect(MONGO_URL)

		/** hash */
		const salt = await genSalt(10)
		const hashedPassword = await hash(req.body.password, salt)

		/** data */
		const newUser = new User({
			id: req.body.id,
			username: req.body.username,
			password: hashedPassword,
		})

		/** insert data */
		const user = await newUser.save()
		res.status(200).json(user)
	} catch (err: unknown) {
		res.status(500).json(err)
	}
})

/** login */
authRouter.post("/login", async (req: Request, res: Response) => {
	try {
		/** connnect db */
		await connect(MONGO_URL)

		/** find user */
		const user = await User.findOne({id: req.body.id})

		/** no user */
		if (!user) {
			res.status(404).json("Member Not Found")
		} else {
			/** compare password */
			const validated = await compare(req.body.password, user.password)

			/** wrong password */
			if (!validated) {
				res.status(400).json("Wrong password")
			} else {
				res.status(200).json(user)
			}
		}

	} catch (err: unknown) {
		res.status(500).json(err)
	}
})

export { authRouter }