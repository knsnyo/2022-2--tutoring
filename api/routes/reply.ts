import { Router, Request, Response } from "express"
import { Reply } from "../models/Reply"

/** db */
import { connect } from "mongoose"
import { MONGO_URL } from "../setting"

const replyRouter: Router = Router()

replyRouter.post("/", async (req: Request, res: Response) => {
	const newReply = new Reply(req.body)
	try {
		/** connnect db */
		await connect(MONGO_URL)
		
		const savedReply = await newReply.save()
		res.status(200).json(savedReply)
	} catch (err: unknown) {
		res.status(500).json(err)
	}
})

replyRouter.get("/:id", async (req: Request, res: Response) => {
	try {
		/** connnect db */
		await connect(MONGO_URL)
		
		const findPostId = req.params.id
		const reply = await Reply.find({ post_id: findPostId })
		res.status(200).json(reply)
	} catch (err: unknown) {
		res.status(500).json(err)
	}
})

export { replyRouter }