import React from "react"
import "./login.css"

import { Link } from "react-router-dom"

function Login () {
	return (
		<div className="login">
			<form className="loginForm">
				<label>MoSiKaengE</label>
				<div className="loginFormGroup">
					<input type="text" placeholder="id" required/>
					<input type="password" placeholder="password" required/>
					<div className="loginFormButton">
						<button className="loginSubmit">Login</button>
						<Link to="/register">
							<button className="loginRegister">Register</button>
						</Link>
					</div>
				</div>
			</form>
		</div>
	)
}

export default Login