import React from "react"
import Profile from "../profile/Profile"
import "./info.css"

import { Link } from "react-router-dom"

function Info () {
	return (
		<div className="info">
			<div className="infoProfile">
				<Profile name="/profile.jpg"/>
			</div>
			<div className="infoView">
				<div className="infoSettings">
					<span>mosikangeE</span>
					<Link className="link" to="/setting">
						<i className="fa-solid fa-gear"></i>
					</Link>
				</div>
				<div className="infoTotal">
					<div className="infoTotalDetail">
						post: 34
					</div>
					<div className="infoTotalDetail">
						follower: 34
					</div>
					<div className="infoTotalDetail">
						follow: 34
					</div>
				</div>
			</div>
		</div>
	)
}

export default Info