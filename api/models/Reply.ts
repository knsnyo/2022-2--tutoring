import { Schema, model, Model } from "mongoose"

interface DBReply {
	description: string,
	user_id: string,
	post_id: string,
}

interface DBReplyModel extends Model<DBReply> {}

const ReplySchema = new Schema<DBReply>({
	description: {
		type: String,
		required: true,
	},
	user_id : {
		type: String,
		required: true,
	},
	post_id : {
		type: String,
		required: true,
	},

}, {timestamps: true})

const Reply = model<DBReply, DBReplyModel>("replys", ReplySchema)

export { Reply }