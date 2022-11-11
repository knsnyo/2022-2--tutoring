import { Router, Request, Response } from "express"
import multer, { diskStorage } from "multer"

const uploadRouter: Router = Router()

/** file upload */
const storage = diskStorage({
	destination: (req, file, cb) => {
		/** save file destination */
		cb (null, "upload/")
	},
	filename: (req, file, cb) => {
		/** save file name */
		//cb(null, Date.now() + file.originalname)
		cb(null, req.body.name)
	}
})

const upload = multer({ storage : storage })

uploadRouter.post("/", upload.single("file"), (req: Request, res: Response) => {
	res.status(200).json("file upload")
})

export { uploadRouter }

/**
 * https://www.zerocho.com/category/NodeJS/post/5950a6c4f7934c001894ea83
 */