import { useState, useEffect } from "react"
import Header from "../../components/header/Header"
import Info from "../../components/info/Info"
import Magazines from "../../components/magazines/Magazines"
import axios from "axios"
import { useLocation } from "react-router-dom"

function Mypage () {
	const [posts, setPosts] = useState([])
	const location = useLocation()
	const path = location.pathname.split("/")[1]

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(`/api/post/${path}`)
      setPosts(res.data)
    }
    fetchPosts()
  }, [path])

	return (
		<>
			<Header/>
			<Info post={posts.length}/>
			<Magazines posts={posts}/>
		</>
	)
}

export default Mypage