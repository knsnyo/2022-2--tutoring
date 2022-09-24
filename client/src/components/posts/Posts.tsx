import Post from "../post/Post"
import "./posts.css"

import { IPost } from "../../interface"
interface IProps {
	posts: Array<IPost>
}

function Posts ({ posts }: IProps) {
	return (
		<div className="posts">
			{posts.map((data: IPost, index) => (
				<Post post={data} key={index}/>	
			))}
		</div>
	)
}

export default Posts