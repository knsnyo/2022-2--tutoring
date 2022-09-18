import React from "react"
import "./register.css"

import { Link } from "react-router-dom"

function Register () {
	return (
		<div className="register">
			<form className="registerForm">
				<label>MoSiKaengE</label>
				<div className="registerFormGroup">
					<input type="text" placeholder="id" required/>
					<input type="text" placeholder="username" required/>
					<input type="password" placeholder="password" required/>
					<div className="registerFormButton">
						<button className="registerSubmit">register</button>
						<Link to="/login">
							<button className="registerLogin">Login</button>
						</Link>
					</div>
				</div>
			</form>
		</div>
	)
}

export default Register