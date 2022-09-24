import axios from "axios";
import { useEffect, useState } from "react"
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";

function Home () {
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
      <Posts posts={posts}/>
    </>
	)
}

export default Home;