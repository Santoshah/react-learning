
import useFetch from "../hooks/useFetch";
import BlogList from "./BlogList";



const Home = () => {
    
    let url = 'http://localhost:8000/blogs';
    const {data : blogs, isPending, error } = useFetch(url);

    // const handleDelete = (id) => {
    //     const newBlogs = data.filter(blog=> blog.id !== id)
    //     setBlogs(newBlogs)
    // }



    return (
        <div className="home">
            { error && <div>{error}</div>} 
            {isPending && <div>loading blogs...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!" /> }
        </div>
    );
}

export default Home;