import "./register.css"
import { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

function Register () {
	const [id, setId] = useState<string>("")
	const [username, setUsername] = useState<string>("")
	const [password, setPassword] = useState<string>("")
	const [error, setError] = useState<boolean>(false)

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setError(false)
		try {
			const newUser = {
				id: id,
				username: username,
				password: password,
			}
			const res = await axios.post("/api/auth/register", newUser)
			res.data && window.location.replace("/")
		} catch (err: unknown) {
			setError(true)
		}
	}

	return (
		<div className="register">
			<form className="registerForm" onSubmit={handleSubmit}>
				<label><strong>MoSiKaengE</strong></label>
				<div className="registerFormGroup">
					<input 
					type="text" 
					placeholder="id"
					onChange={(e) => setId(e.target.value)} 
					required/>
					<input 
					type="text" 
					placeholder="username" 
					onChange={(e) => setUsername(e.target.value)}
					required/>
					<input 
					type="password" 
					placeholder="password" 
					onChange={(e) => setPassword(e.target.value)}
					required/>
					<div className="registerFormButton">
						<button className="registerSubmit">Register</button>
						<Link to="/login">
							<button className="registerLogin">Login</button>
						</Link>
					</div>
					{error && <span style={{"color": "red", "marginTop": "5px"}}>ERROR!!!</span>}
				</div>
			</form>
		</div>
	)
}

export default Register