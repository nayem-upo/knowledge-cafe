import "./Bookmark.css"
import React, { useState } from 'react';


const Bookmark = ({cart}) => {

    return (
        <div>       
            {
                cart.map(ar=> <h5 key={ar.id} className="bokmark-compo">{ar.tittle}</h5> )
            }
        </div>  
    );
};

export default Bookmark;