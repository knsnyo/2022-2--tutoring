import axios from "axios";
import { useEffect, useState } from "react"
import Bottom from "../../components/bottom/Bottom";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import { IPost } from "../../interface"

function Home () {
  const [posts, setPosts] = useState<Array<IPost>>([])

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
      <Bottom/>
    </>
	)
}

export default Home;