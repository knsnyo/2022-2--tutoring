export interface IPost {
	description: string,
	user_id: string,
	postPic: Array<string>,
	like: number,
	_id: string
}

export interface IUser {
	[key: string]: string
}

export interface ILogin {
	user: any,
	isFetching: boolean,
	error: boolean,
}

export interface IReply {
	user_id: string,
	post_id: string,
	description: string
}