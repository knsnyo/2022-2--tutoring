import "./account.css"
import React, { useState, useContext } from "react"
import { LoginContext } from "../../context/LoginContext"
import axios from "axios"
import { PF } from "../../settings"

function Account () {
	const { state, dispatch } = useContext(LoginContext)
	const [username, setUsername] = useState<string>(state.user.username)
	const [intro, setIntro] = useState<string>(state.user.intro)
	const [file, setFile] = useState<FileList | null>()

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		dispatch({ type: "UPDATE_START" })
		const updatedUser = {
			_id: state.user._id,
			username: username,
			intro: intro,
			profilePic: "",
		}
		if (file) {
			const data = new FormData()
			const filename = Date.now() + file[0].name
			data.append("name", filename)
			data.append("file", file[0])
			updatedUser.profilePic = filename
			try {
				await axios.post("/api/upload", data)
			} catch (err: unknown) {
				console.log(err)
			}
		} else {
			if(state.user.profilePic) {
				updatedUser.profilePic = state.user.profilePic
			}
		}
		try {
			const res = await axios.put(`/api/user/${state.user._id}`, updatedUser)
			dispatch({ type: "UPDATE_SUCCESS", payload: res.data})
			window.location.replace("/")
		} catch (err: unknown) {
			dispatch({ type: "UPDATE_FAILURE" })
		}
	}

	const disaccount = async (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault()
		const deleteUser = {
			_id: state.user._id
		}
		try {
			await axios.delete(`/api/user/${state.user._id}`, {
				data: deleteUser
			})
			dispatch({ type: "LOGOUT"})
			window.location.replace("/")
		} catch (err: unknown) {
			console.log(err)
		}
	}

	return (
		<div className="account">
			<div className="accountWrapper">
				<form className="accountForm" onSubmit={handleSubmit}>
					<div className="accountFormPP">
						<label htmlFor="accountPP">
							<img
								src={
									(file) ?
									URL.createObjectURL(file[0]) :
									((state.user.profilePic !== "") ?
									(`${PF + state.user.profilePic}`) :
									"/no.jpg")
								}
								alt=""
							/>
						</label>
						<input
							type="file" 
							id="accountPP" 
							style={{display: "none"}}
							accept=".jpg,.jpeg,.png"
							onChange={(e) => setFile(e.target.files)}
						/>
					</div>
					<div className="accountFormGroup">
						<input
							type="text"
							placeholder="username"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							required={true}
						/>
						<textarea 
							placeholder="introduce"
							value={intro}
							onChange={(e) => setIntro(e.target.value)}
						/>
						<div className="accountFormButton">
							<button className="accountSubmit" type="submit">Update</button>
							<button className="accountDelete" onClick={disaccount}>Delete</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Account