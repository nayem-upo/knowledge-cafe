import "./Blogs.css"

import React, { useEffect, useState } from 'react';
import Blog from "../Blog/Blog";
import Sidebar from "../Sidebar/Sidebar";



const Blogs = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(()=>{
        fetch('user.json')
        .then(response=> response.json())
        .then(data=> setBlogs(data))
    },[])

    return (
        <div className="blogs-main">
            <div>
            {
                blogs.map(blog=><Blog blog={blog} key={blog.id}></Blog>)
            }
            </div>
            <Sidebar ></Sidebar>
        </div>
    );
};

export default Blogs;