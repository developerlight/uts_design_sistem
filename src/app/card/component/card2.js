import React from 'react';
import '../style/card2.css'

const Card2 = ({ imageSrc, title }) => {
    return (
        <div className='card'>
            <img src={imageSrc} alt={title} className='image'/>
            <h2 className='title'>{title}</h2>
        </div>
    );
};


export default Card2;