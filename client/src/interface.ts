export interface IPost {
	description: string,
	user_id: string,
	postPic: string,
	like: number
}

export interface IUser {
	[key: string]: string
}

export interface ILogin {
	user: any,
	isFetching: boolean,
	error: boolean
}