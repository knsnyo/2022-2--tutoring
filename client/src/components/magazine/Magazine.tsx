import { Link } from "react-router-dom"
import { IPost } from "../../interface"
import "./magazine.css"

interface IProps {
	magazine: IPost
}

function Magazine ({magazine}: IProps) {
	let item = Object.values(magazine.postPic)
	const PF = "http://localhost:5000/image/"

	return (
		<div className="magazine">
			<Link className="link" to={`/single/${magazine._id}`}>
				<img src={PF + item[0]} alt=""/>
			</Link>
		</div>
	)
}

export default Magazine