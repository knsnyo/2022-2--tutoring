import React from "react"
import "./gallery.css"
import Carousel from "react-material-ui-carousel"
import { Paper } from "@mui/material"

function Gallery () {
	let items = [
		{
			name: "Random Name #1",
			description: "hello",
		},
		{
			name: "Random Name #2",
			description: "hello",
		},
		{
			name: "Random Name #3",
			description: "hello",
		},
	]
	return (
		<div className="gallery">
			<Carousel
				autoPlay={false}
				cycleNavigation={false}
				navButtonsAlwaysVisible={true}
				fullHeightHover={true}
				animation="slide"
				PrevIcon={<i className="fa-solid fa-chevron-left"></i>}
				NextIcon={<i className="fa-solid fa-chevron-right"></i>}
			>
				{
					items.map((item, i) => (
						<Item key={i} item={item}/>
					))
				}
			</Carousel>
		</div>
	)
}

function Item(props: any) {
	return (
		<Paper>			
			<img src={"/profile.jpg"} alt="" width={"100%"}/>
		</Paper>
	)
}

export default Gallery

/**
 * react-material-ui-carousel
 */