import "./form.css"
import React, { useState, useContext } from "react"
import axios from "axios"
import { LoginContext } from "../../context/LoginContext"

function Form () {
	const [description, setDescription] = useState<string>("")
	const [file, setFile] = useState<FileList>()
	const { state } = useContext(LoginContext)

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const newPost = {
			description: description,
			user_id: state.user,
			postPic: "",
			like: 0,
		}
		if (file) {
			const image = new FormData();
			const filename = Date.now() + file[0].name
			image.append("name", filename)
			image.append("file", file[0])
			newPost.postPic = filename
			try {
				await axios.post("/api/upload", image)
			} catch (err: unknown) {
				console.log(err)
			}
		}
		try {
			await axios.post("/api/post/", newPost)
			window.location.replace("/")
		} catch (err: unknown) {
			console.log(err)
		}
	}

	return (
		<div className="form">
			<div className="formPreview">
				test
			</div>
			<form className="formWrite" onSubmit={handleSubmit}>
				<div className="formWriteGroup">
					<label htmlFor="fileInput" className="formWriteGroupLabel">
						<i className="fa-solid fa-image"></i>
					</label>
					<input 
						id="fileInput" 
						type="file" 
						multiple={true} 
						style={{display: "none"}}
					/>
					<textarea
						placeholder="Tell your story"
						onChange={(e) => setDescription(e.target.value)}
					/>
				</div>
				<div className="formWriteButton">
					<button className="formWriteGroupSubmit" type="submit">
						Upload
					</button>
				</div>
			</form>
		</div>
	)
}

export default Form