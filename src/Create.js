import { useState } from "react";
import {useNavigate} from 'react-router-dom';

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');

    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault();

        setIsPending(true);
        const blog = {title, body, author}
        
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers : {"Content-Type": "application/json" },
            body : JSON.stringify(blog)
        }).then(()=>{
            console.log("new blog addedd");
            setIsPending(false);
            navigate('/')
        })
    }

    return (
        
        <div className="create">
            <h2>Add a new Blog</h2>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">Blog Title:</label>
                <input type="text" required value={title}
                onChange={(e)=>setTitle(e.target.value)}
                />

                <label htmlFor="">Blog Body:</label>
                <textarea value={body} onChange={(e)=>setBody(e.target.value)} cols="30" rows="10"></textarea>

                <label htmlFor="">Blog Author:</label>
                <select name="" id=""
                    value={author}
                    onChange={(e)=>setAuthor(e.target.value)}
                >
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}
            </form>
        </div>
    );
}

export default Create;