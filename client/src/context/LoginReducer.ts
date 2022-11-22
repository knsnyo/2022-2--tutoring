import { ILogin } from "../interface";

export type TLoginAction =
| { type: "LOGIN_START"}
| { type: "LOGIN_SUCCESS", payload: ILogin}
| { type: "LOGIN_FAILURE"}
| { type: "LOGOUT"}
| { type: "UPDATE_START"}
| { type: "UPDATE_SUCCESS", payload: ILogin}
| { type: "UPDATE_FAILURE"}
| { type: string, payload?: ILogin}

export function LoginReducer (state: ILogin, action: TLoginAction): ILogin {
	switch (action.type) {
		case "LOGIN_START":
			return {
				user: null,
				isFetching: true,
				error: false
			}
		case "LOGIN_SUCCESS":
			return {
				user: action.payload,
				isFetching: false,
				error: false
			}
		case "LOGIN_FAILURE":
			return {
				user: null,
				isFetching: false,
				error: true
			}
		case "LOGOUT":
			return {
				user: null,
				isFetching: false,
				error: false,
			}
		case "UPDATE_START":
			return {
				...state,
				isFetching: true,
			}
		case "UPDATE_SUCCESS":
			return {
				user: action.payload,
				isFetching: false,
				error: false,
			}
		case "UPDATE_FAILURE":
			return {
				user: state.user,
				isFetching: false,
				error: true,
			} 
		default:
			return state
	}
}