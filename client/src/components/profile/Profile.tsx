import React from "react"
import "./profile.css"

type ImageUrl = {
	name: string;
}

function Profile ({name}: ImageUrl) {
	return (
		<div className="profile">
			<img src={name} alt=""/>
		</div>
	)
}

export default Profile