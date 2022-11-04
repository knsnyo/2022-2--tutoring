import { Router, Request, Response } from "express"
import { Post } from "../models/Post"

/** db */
import { connect } from "mongoose"
import { MONGO_URL } from "../setting"
import { Reply } from "../models/Reply"

const postRouter: Router = Router()

/** upload post */
postRouter.post("/", async(req: Request, res: Response) => {
	const newPost = new Post(req.body)
	try {
		/** connnect db */
		await connect(MONGO_URL)

		const savedPost = await newPost.save()
		res.status(200).json(savedPost)
	} catch (err: unknown) {
		res.status(500).json(err)
	}
})

/** update post */
postRouter.put("/:id",async (req: Request, res: Response) => {
	try {
		/** connnect db */
		await connect(MONGO_URL)

		const findPost = await Post.findById(req.params.id)
		if(!findPost) {
			res.status(404).json("Post Not Found")
		} else {
			if(findPost.user_id !== req.body.user_id) {
				res.status(401).json("Not Your Post")
			} else {
				const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
					$set: req.body
				}, { new: true })
				res.status(200).json(updatedPost)
			}
		}
	} catch (err: unknown) {
		res.status(500).json(err)
	}
})

/** delete post */
postRouter.delete("/:id",async (req: Request, res: Response) => {
	try {
		/** connnect db */
		await connect(MONGO_URL)

		const findPost = await Post.findById(req.params.id)
		if (!findPost) {
			res.status(404).json("Post Not Found")
		} else {
			if (findPost.user_id !== req.body.user_id) {
				res.status(401).json("Not Your Post")
			} else {
				await findPost.delete()
				await Reply.deleteMany({ post_id: req.params.id})
				
				res.status(200).json("Delete Your Post")
			}
		}
	} catch (err: unknown) {
		res.status(500).json(err)
	}
})

/** get user post */
postRouter.get("/:id", async (req: Request, res: Response) => {
	try {
		const findUser = req.params.id
		const post = await Post.find({ user_id: findUser })
		post.reverse()
		res.status(200).json(post)
	} catch(err) {
		res.status(500).json(err)
	}
})

/** get user post */
postRouter.get("/single/:id", async (req: Request, res: Response) => {
	try {
		const post = await Post.find({ _id: req.params.id })
		res.status(200).json(post)
	} catch(err) {
		res.status(500).json(err)
	}
})

/** get all post */
postRouter.get("/", async (req: Request, res: Response) => {
	const findUser = req.query.User
	try {
		/** connnect db */
		await connect(MONGO_URL)
		let posts
		if (findUser) {
			/** find user post */
			posts = await Post.find({ findUser })
		} else {
			/** find all post */
			posts = await Post.find()
		}
		posts.reverse()
		res.status(200).json(posts)
	} catch (err: unknown) {
		res.status(500).json(err)
	}
})

export { postRouter }