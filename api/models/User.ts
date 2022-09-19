import { Schema, model, Model } from "mongoose"

interface DBUser {
	[key: string]: string
}

interface DBUserModel extends Model<DBUser> {}

const UserSchema: Schema = new Schema({
	id: {
		type: String,
		required: true,
		unique: true,
	},
	username: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true,
	},
	profilePic: {
		type: String,
		default: ""
	},
	intro: {
		type: String,
		default: "",
	},
}, {timestamps: true})

const User = model<DBUser, DBUserModel>("users", UserSchema)

export { User, DBUser }