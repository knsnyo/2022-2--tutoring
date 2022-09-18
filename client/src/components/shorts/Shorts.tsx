import React from "react"
import Profile from "../profile/Profile";
import "./shorts.css"
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'

function Shorts () {
	return (
		<div className="shorts">
			<Carousel>
				<Short/>
				<Short/>
				<Short/>
				<Short/>
				<Short/>
				<Short/>
				<Short/>
				<Short/>
				<Short/>
				<Short/>
			</Carousel>
		</div>
	)
}

function Short () {
	return (
		<Paper>
			<Profile name="/profile.jpg"/>
			<div className="shortUsername">
				username
			</div>
		</Paper>
	)
}

export default Shorts;