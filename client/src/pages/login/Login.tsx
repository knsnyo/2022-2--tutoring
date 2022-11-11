import "./login.css"
import React, { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { LoginContext } from "../../context/LoginContext"
import axios from "axios"

function Login () {
	// const userRef = useRef<HTMLInputElement>()
	// const passwordRef = useRef<HTMLInputElement>()
	const [id, setId] = useState<string>("")
	const [password, setPassword] = useState<string>("")
	const [error, setError] = useState<boolean>(false);
	const { state, dispatch } = useContext(LoginContext)

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		dispatch({type: "LOGIN_START"})
		try {
			const res = await axios.post("/api/auth/login", {
				id: id,
				password: password,
			})
			dispatch({ type: "LOGIN_SUCCESS", payload: res.data})
		} catch (err: unknown) {
			dispatch({ type: "LOGIN_FAILURE"})
			setError(false);
		}
	}

	return (
		<div className="login">
			<form className="loginForm" onSubmit={handleSubmit}>
				<label><strong>MoSiKaengE</strong></label>
				<div className="loginFormGroup">
					<input type="text" placeholder="id" onChange={(e) => setId(e.target.value)} required/>
					<input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} required/>
					<div className="loginFormButton">
						<button className="loginSubmit" type="submit" disabled={state.isFetching}>Login</button>
						<Link to="/register">
							<button className="loginRegister">Register</button>
						</Link>
					</div>
				</div>
				{error && <label style={{color: "red"}}>Login Failure</label>}
			</form>
		</div>
	)
}

export default Login