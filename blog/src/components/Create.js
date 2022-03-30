import { useState } from "react"

const Create = () => {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [author, setAuthor] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {title, body, author}
    
    fetch('http://localhost:3000/blogs', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('new blog added')
    })
  }

  return (
    <div>
      <h2>Create a post</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Topic" 
          name="title" 
          required 
          value={title} 
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea 
          type="text" 
          placeholder="Share with us!" 
          name="body" 
          required 
          value={body} 
          onChange={(e) => setBody(e.target.value)}
        />
        <input 
          type="text" 
          placeholder="Name" 
          name="author" 
          required 
          value={author} 
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default Create;