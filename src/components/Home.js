import { useState, useEffect } from "react";
import BlogList from "./BlogList";


const Home = () => {


    const [blogs, setBlogs] = useState([
        {title : 'My new Website', body : 'lorem ipsum', author: 'mario', id: 1},
        {title : 'My Welcome party', body : 'lorem ipsum', author: 'mario', id: 2},
        {title : 'Web dev tips', body : 'lorem ipsum', author: 'luna', id: 3},
    ])

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog=> blog.id !== id)
        setBlogs(newBlogs)
    }

    useEffect(()=>{
        console.log('use effect ran')
        console.log(blogs)
    })

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
        </div>
    );
}
 
export default Home;