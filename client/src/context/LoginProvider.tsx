import { useReducer, useEffect } from "react"
import { ILogin } from "../interface"
import { LoginContext } from "./LoginContext"
import { LoginReducer } from "./LoginReducer"

const INIT: ILogin = {
	user: (localStorage.getItem("user") === "null") ? null : JSON.parse(localStorage.getItem("user") || "{}"),
	isFetching: false,
	error: false,
}

interface IProps {
	children: JSX.Element
}

export function LoginProvider ({ children }: IProps) {
	const [state, dispatch] = useReducer(LoginReducer, INIT)

	useEffect(() => {
		localStorage.setItem("user", JSON.stringify(state.user))
		//localStorage.setItem("user", "null")
	}, [state])

	return (
		<LoginContext.Provider value={{ state, dispatch }}>
			{ children }
		</LoginContext.Provider>
	)
}

/**
 * https://www.youtube.com/watch?v=8HE657KssxE
 */