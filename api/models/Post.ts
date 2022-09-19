import { Schema, model, Model } from "mongoose"

interface DBPost {
	[key: string]: string
}

interface DBPostModel extends Model<DBPost> {}

const PostSchema = new Schema<DBPost>({
	description: {
		type: String,
		default: "",
	},
	user_id : {
		type: String,
		required: true,
	},
	postPic: {
		type: String,
		required: true,
	}
}, {timestamps: true})

const Post = model<DBPost, DBPostModel>("posts", PostSchema)

export { Post }