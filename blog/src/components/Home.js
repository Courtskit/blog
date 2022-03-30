import { useState, useEffect } from "react"
import BlogList from "./BlogList"
import Create from "./Create"


const Home = () => {

  // const [post, newPost] = useState("")
  const [blogs, setBlogs] = useState("")
  const [isPending, setIsPending] = useState(true)

  // const blogPost = "blogPost"

  // const handleClick = () => {
  //   if (document.getElementById(blogPost)) {
  //     let recentBlog = document.getElementById(blogPost).value
  //     newPost(recentBlog)
  //   }

  //   {blogs.map((blog) => (
  //     <div className="blog-preview" key={blog.id}> 
  //       <h2>{ blog.title}</h2>
  //       <p>Posted by { blog.author }</p>
  //     </div>
  //   ))}
  // }

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }

  useEffect(() => {
    console.log('use effect ran')
    fetch('http://localhost:3000/blogs')
      .then(res => {
        return res.json()
      })
      .then(data => {
        setBlogs(data)
        setIsPending(false);
      });
  }, []);

  return ( 
    <div>
      <Create />
      { isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>}
    </div>
   );
}
 
export default Home;