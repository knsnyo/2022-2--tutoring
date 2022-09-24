import React from "react"
import { IPost, IUser } from "../../interface"
import "./reply.css"

interface IProps {
	user: IUser,
	post: IPost
}

function Reply ({user, post}: IProps) {
	return (
		<div className="reply">
			<div className="replyMenu">
				<div className="replyMenuLeft">
					<i className="replyIcon fa-regular fa-heart"></i>
					<i className="replyIcon fa-regular fa-comment"></i>
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
			</div>
			<div className="replyForm">
				<div className="replyFormLeft">
					<i className="replyIcon fa-regular fa-face-smile"></i>
				</div>
				<div className="replyFormCenter">
					<input type="text" className="replyInput" placeholder="reply"/>
				</div>
				<div className="replyFormRight">게시</div>
			</div>
		</div>
	)
}

export default Reply