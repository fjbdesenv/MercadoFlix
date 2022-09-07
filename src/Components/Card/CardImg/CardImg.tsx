import React from "react";

import "./CardImg.css";

interface params{
    imgURL: string;
    link:string;
    name:string
}

function CardImg({imgURL, link, name}:params) {
    return (
        <div className="card-img">
            <a href={link} target='_blank'>
                <img src={imgURL} />
                <div className="card-name">{name}</div>
            </a>
        </div>
    );
}

export default CardImg;