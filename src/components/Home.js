import { useState, useEffect } from "react";
import BlogList from "./BlogList";


const Home = () => {


    const [blogs, setBlogs] = useState(null)
    const [isPending, setisPending] = useState(true)

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog=> blog.id !== id)
        setBlogs(newBlogs)
    }

    useEffect(()=>{
        fetch('http://localhost:8000/blogs').then(res=>{
            return res.json()
        }).then(data=>{
            setBlogs(data);
            setisPending(false)
        })
    },[])

    return (
        <div className="home">
            {isPending && <div>loading blogs...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/> }
        </div>
    );
}
 
export default Home;