import "./gallery.css"
import Carousel from "react-material-ui-carousel"
import { Paper } from "@mui/material"

interface IProps {
	photo: object
}

function Gallery ({photo}: IProps) {
	let items = Object.values(photo)

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

interface IItemProps {
	item: string
}

function Item({item}: IItemProps) {
	const PF = "http://localhost:5000/image/"
	return (
		<Paper>			
			<img src={PF + item} alt="" width={"100%"} height={"450px"}/>
		</Paper>
	)
}

export default Gallery

/**
 * react-material-ui-carousel
 */