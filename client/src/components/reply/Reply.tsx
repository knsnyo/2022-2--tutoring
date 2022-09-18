import React from "react"
import "./reply.css"

function Reply () {
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
				Like: {3}
			</div>
			<div className="postDescription">
				작성자: 내용
			</div>
			<div className="replyList">
				작성자: 댓글
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