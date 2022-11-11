import "./magazines.css"
import Magazine from "../magazine/Magazine"
import { IPost } from "../../interface"

interface IProps {
	posts: Array<IPost>
}

function Magazines ({ posts }: IProps) {
	return (
		<div className="magazines">
			{Array.isArray(posts) && posts.map((data:IPost, index) => (
				<Magazine key={index} magazine={data}/>
			))}
		</div>
	)
}

export default Magazines