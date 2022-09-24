import { IPost } from "../../interface"
import "./magazine.css"

interface IProps {
	magazine: IPost
}

function Magazine ({magazine}: IProps) {
	return (
		<div className="magazine">
			<img src={"/profile.jpg"} alt=""/>
		</div>
	)
}

export default Magazine