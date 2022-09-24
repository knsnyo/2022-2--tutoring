import { useState, useEffect } from "react"

import Header from "../../components/header/Header"
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
			<Header/>
			<Magazines posts={posts}/>
		</>
	)
}

export default Explore