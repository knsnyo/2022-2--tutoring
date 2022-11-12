import { useState, useEffect } from "react"
import Magazines from "../../components/magazines/Magazines"
import axios from "axios"
import Header from "../../components/header/Header"
import Bottom from "../../components/bottom/Bottom"

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
      <Header/>
      <Magazines posts={posts}/>
      <Bottom/>
		</>
	)
}

export default Explore