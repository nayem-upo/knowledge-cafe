import "./Blogs.css"

import React, { useEffect, useState } from 'react';
import Blog from "../Blog/Blog";
import Sidebar from "../Sidebar/Sidebar";


const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    const [cart, setCart] = useState([])
    const [time, setTime] = useState(0)
    
    useEffect(()=>{
        fetch('user.json')
        .then(response=> response.json())
        .then(data=> setBlogs(data))
    },[])

    return (
        <div className="blogs-main">
            <div>
            {
                blogs.map(blog=><Blog time={time} setTime={setTime} setCart={setCart} cart={cart} blog={blog} key={blog.id}></Blog>)
            }
            </div>
            <Sidebar time={time} cart={cart}></Sidebar>
        </div>
    );
};

export default Blogs;