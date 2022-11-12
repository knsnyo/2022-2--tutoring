import { useState, useEffect } from "react"
import Magazines from "../../components/magazines/Magazines"
import axios from "axios"

function Explore () {
	const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/api/post/")
      setPosts(res.data)
    }
    fetchPosts()
  }, [])

	return (
		<>
			<Magazines posts={posts}/>
		</>
	)
}

export default Explore