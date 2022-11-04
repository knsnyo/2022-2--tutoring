import axios from "axios"
import React, { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { LoginContext } from "../../context/LoginContext"
import { IPost, IReply, IUser } from "../../interface"
import "./reply.css"
import ReplyDetail from "./ReplyDetail"

interface IProps {
	user: IUser,
	post: IPost
}

function Reply ({user, post}: IProps) {
	const { state } = useContext(LoginContext)
	const [reply, setReply] = useState<string>("")
	const [replies, setReplies] = useState([])
	const [view, setView] = useState<boolean>(false)
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (reply !== "") {
			const newReply = {
				description: reply,
				user_id: state.user,
				post_id: post._id,
			}
			try {
				await axios.post("/api/reply", newReply)
				setReply("")
			} catch (err: unknown) {
				console.log(err)
			}
		}
	}
	
	useEffect(() => {
    const fetchReplies = async () => {
      const res = await axios.get(`/api/reply/${post._id}`)
      setReplies(res.data)
    }
    fetchReplies()
  }, [post._id, replies])

	return (
		<div className="reply">
			<div className="replyMenu">
				<div className="replyMenuLeft">
					<i className="replyIcon fa-regular fa-heart"></i>
					<Link to={`/single/${post._id}`} className="link">
						<i className="replyIcon fa-regular fa-comment"></i>
					</Link>
					<i className="replyIcon fa-regular fa-paper-plane"></i>
				</div>
				<div className="replyMenuRight">
					<i className="replyIcon fa-regular fa-bookmark"></i>
				</div>
			</div>
			<div className="replyTotalLike">
				<strong>Like</strong>: {post.like}
			</div>
			<div className="postDescription">
				<span><strong>{user.username}&nbsp;</strong>{post.description}</span>
			</div>
			<div className="replyList">
				<div className="postDescription" onClick={() => setView(!view)} style={{color: "#888"}}>{ !view ? "댓글 확인" : "댓글 숨기기"}</div>
				{view && replies.map((re: IReply, index) => {
					return (
						<ReplyDetail re={re} key={index}/>
				)})}
			</div>
			<form className="replyForm" onSubmit={handleSubmit}>
				<div className="replyFormLeft">
					<i className="replyIcon fa-regular fa-face-smile"></i>
				</div>
				<div className="replyFormCenter">
					<input
						type="text" 
						className="replyInput" 
						placeholder="reply"
						onChange={(e) => setReply(e.target.value)}
						value={reply}
					/>
				</div>
				{reply.length !==0 && <button className="replyFormRight" type="submit">게시</button>}
				{reply.length === 0 && <button className="replyFormRight" type="submit" style={{opacity: 0.2}} disabled>게시</button>}
			</form>
		</div>
	)
}

export default Reply