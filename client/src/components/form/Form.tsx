import "./form.css"
import React, { useState, useContext, useEffect } from "react"
import axios from "axios"
import { LoginContext } from "../../context/LoginContext"
import { useLocation } from "react-router-dom"
import { IPost } from "../../interface"

function Form () {
	const [description, setDescription] = useState<string>("")
	const [file, setFile] = useState<FileList | null>()
	const [post, setPost] = useState<IPost>()
	const { state } = useContext(LoginContext)
	
	const location = useLocation()
	const path = location.pathname.split("/")[2]

	const viewFile = () => {
		let returnImg = []
		if (file) {
			for (let i = 0 ; i < file.length; i += 1) {
				returnImg.push(
					<img
						src={URL.createObjectURL(file[i])}
						alt=""
						key={i}
						width="20%"
						height={"20%"}
					/>
				)
			}
		}

		return returnImg
	}

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const newPost = {
			description: description,
			user_id: state.user._id,
			postPic: new Array(),
		}
		if (file) {
			for(let i = 0; i < file.length; i += 1) {
				const data = new FormData()
				const filename = Date.now() + file[i].name
				data.append("name", filename)
				data.append("file", file[i])
				newPost.postPic.push(filename)
				try {
					await axios.post("/api/upload", data)
				} catch (err: unknown) {
					console.log(err)
				}
			}
		}
		try {
			if(post) {
				await axios.put(`/api/post/${path}`, 
					{
						...newPost,
						_id: path
					}
				)
			} else {
				await axios.post("/api/post/", newPost)
			}
			window.location.replace("/")
		} catch (err: unknown) {
			console.log(err)
		}
	}

	useEffect(() => {
		if (path) {
			const findPost = async () => {
				try {
					const res = await axios.get(`/api/post/single/${path}`)
					setPost(res.data)
				} catch (err: unknown) {
					console.log(err)
				}
			}
			findPost()
		}
	}, [path, post])

	return (
		<div className="form">
			<div className="formPreview">
				<label htmlFor="fileInput" className="formWriteGroupLabel">
					{ (file?.length !== 0) ?
						viewFile()
						:
						<i className="fa-solid fa-image"></i>
					}
				</label>
			</div>
			<form className="formWrite" onSubmit={handleSubmit}>
				<div className="formWriteGroup">
					<input 
						id="fileInput" 
						type="file" 
						multiple={true} 
						accept=".jpg,.jpeg,.png"
						style={{display: "none"}}
						onChange={(e) => setFile(e.target.files)}
						required
					/>
					<textarea
						placeholder="Tell your story"
						onChange={(e) => setDescription(e.target.value)}
						value={description}
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