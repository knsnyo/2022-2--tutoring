import { Schema, model, Model } from "mongoose"

interface DBUser {
	id: string,
	username: string,
	password: string,
	profilePic: string,
	intro: string,
	like: Array<object>
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
		default: "",
	},
	intro: {
		type: String,
		default: "",
	},
	like: {
		type: Array,
		defalut: []
	}
}, {timestamps: true})

const User = model<DBUser, DBUserModel>("users", UserSchema)

export { User }