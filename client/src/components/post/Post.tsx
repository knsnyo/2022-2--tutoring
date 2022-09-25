import "./post.css"
import { useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom"
import Gallery from "../gallery/Gallery"
import Profile from "../profile/Profile"
import Reply from "../reply/Reply"
import { IPost, IUser } from "../../interface"
import axios from "axios"
import { LoginContext } from "../../context/LoginContext"
interface IProps {
	post: IPost
}

function Post ({post}: IProps) {
	const { state } = useContext(LoginContext)
	const [user, setUser] = useState<IUser>({})
	
	const PF = "http://localhost:5000/image/"

	useEffect(() => {
		const findUser = async () => {
			const res = await axios.get(`/api/user/${post.user_id}`)
			setUser(res.data)
		}
		findUser()
	}, [post.user_id])

	const deleteHandler = async (e: React.MouseEvent<HTMLElement>) => {
		const deletePost = {
			user_id: post.user_id
		}
		try {
			await axios.delete(`/api/post/${post._id}`, {
				data:deletePost
			})
			window.location.reload()
		} catch (err: unknown) {
			console.log(err)
		}
	}

	return (
		<div className="post">
			<div className="postHeader">
				<div className="postHeaderLeft">
					<span>
						<Link to={`/${user._id}`}>
							<Profile name={
								user.profilePic !== "" ? PF + user.profilePic : "/no.jpg"
							}/>
						</Link>
					</span>
					<Link to={`/${user._id}`} className="link">
						<strong>&nbsp;{user.username}</strong>
					</Link>
				</div>
				{ (state.user._id === post.user_id) ? (
						<div className="postHeaderRight">
							<Link className="link" to={`/write/${post._id}`}>
								<i className="fa-solid fa-pen"></i>
							</Link>
							&nbsp;&nbsp;
							<i className="fa-sharp fa-solid fa-trash" onClick={deleteHandler}></i>
						</div>
					) : (
						<div className="postHeaderRight">
						</div>
					)
				}
			</div>
			<div className="postSection">
				<Gallery photo={post.postPic}/>
			</div>
			<div className="postFooter">
				<Reply user={user} post={post}/>
			</div>
		</div>
	)
}

export default Post