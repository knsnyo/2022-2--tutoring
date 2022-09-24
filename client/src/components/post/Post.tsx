import "./post.css"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Gallery from "../gallery/Gallery"
import Profile from "../profile/Profile"
import Reply from "../reply/Reply"
import { IPost, IUser } from "../../interface"
import axios from "axios"
interface IProps {
	post: IPost
}

function Post ({post}: IProps) {
	const [user, setUser] = useState<IUser>({})
	
	const PF = "http://localhost:5000/image/"

	useEffect(() => {
		const findUser = async () => {
			const res = await axios.get(`/api/user/${post.user_id}`)
			setUser(res.data)
		}
		findUser()
	}, [post.user_id])

	return (
		<div className="post">
			<div className="postHeader">
				<div className="postHeaderLeft">
					<span>
						<Link to={`/${user._id}`}>
							<Profile name={
								user.profilePic != "" ? PF + user.profilePic : "/no.jpg"
							}/>
						</Link>
					</span>
					<Link to={`/${user._id}`} className="link">
						<strong>&nbsp;{user.username}</strong>
					</Link>
				</div>
				<div className="postHeaderRight">
					<i className="fa-solid fa-ellipsis"></i>
				</div>
			</div>
			<div className="postSection">
				<Gallery/>
			</div>
			<div className="postFooter">
				<Reply user={user} post={post}/>
			</div>
		</div>
	)
}

export default Post