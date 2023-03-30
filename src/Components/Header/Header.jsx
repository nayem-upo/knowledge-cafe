import "./Header.css"

import React from 'react';

const Header = () => {
    return (
        <div className="header-main">
            <div className="nav-bar">
                <div>
                    <h1>Technology Cafe</h1>
                </div>
                <div className="links-user">
                    <a href="">Docs</a>
                    <a href="">Plans</a>
                    <a href="">Support</a>
                    <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
                </div>
            </div>
            <hr />
        </div>
    );
};

export default Header;