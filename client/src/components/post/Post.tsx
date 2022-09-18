import React from "react"
import Gallery from "../gallery/Gallery"
import Profile from "../profile/Profile"
import Reply from "../reply/Reply"
import "./post.css"

import { Link } from "react-router-dom"

function Post () {
	return (
		<div className="post">
			<div className="postHeader">
				<div className="postHeaderLeft">
					<Link to="/mypage">
						<Profile name="/profile.jpg"/>
					</Link>
					<Link to="/mypage" className="link">
						name
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
				<Reply/>
			</div>
		</div>
	)
}

export default Post