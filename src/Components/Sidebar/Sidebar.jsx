import "./Sidebar.css"

import React from 'react';
import Bookmark from "../Bookmark/Bookmark";


const Sidebar = () => {
    return (
        <div className="sidebar-main">
            <div className="spent-time">
                <h3>Spent time on read : {} min</h3>
            </div>
            <div className="bookmarks-tips-main">
                <div className="bookmarks-tips">
                    <h3>Bookmarked Blogs : {10}</h3>
                    <Bookmark></Bookmark>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;