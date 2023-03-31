import "./Sidebar.css"

import React from 'react';
import Bookmark from "../Bookmark/Bookmark";


const Sidebar = (props) => {
    const cart = props.cart;
    const time = props.time;

    
    return (
        <div className="sidebar-main">
            <div className="spent-time">
                <h3>Spent time on read : {time} min</h3>
            </div>
            <div className="bookmarks-tips-main">
                <div className="bookmarks-tips">
                    <h3 className="bookamrk-count">Bookmarked Blogs : {cart.length}</h3>
                    <Bookmark cart ={cart}></Bookmark>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;