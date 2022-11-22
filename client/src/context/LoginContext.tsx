import { createContext } from "react"
import { ILogin } from "../interface"
import { TLoginAction } from "./LoginReducer"

interface LoginContextProp {
	state: ILogin,
	dispatch: React.Dispatch<TLoginAction>
}

export const LoginContext = createContext<LoginContextProp>({} as LoginContextProp)