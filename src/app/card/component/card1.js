import React from 'react';
import './../style/card1.css';

const Card1 = ({ title, content, url }) => {
    return (
        <div className="card1">
            <div className="card1-header">
                <img src={url} alt="Card 1" />
            </div>
            <h2 className="card1-title">{title}</h2>
            <p className="card1-content">{content}</p>
        </div>
    );
};

export default Card1;