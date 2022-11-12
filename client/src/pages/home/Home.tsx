import axios from "axios";
import { useEffect, useState } from "react"
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
      <Posts posts={posts}/>
    </>
	)
}

export default Home;