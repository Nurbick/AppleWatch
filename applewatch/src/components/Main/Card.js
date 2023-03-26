import React from 'react';


const Card = ({image, title, price}) => {
    return (
        <div className="main__card">
            <img src={image} alt="" className="main__card__img"/>
            <h3 className="main__card__title">{title}</h3>
            <p className="main__card__price">{price==='Free*'?'Free':`$${price}.00`}</p>
            <button className="main__card__btn" type="button">{price==='Free*'?'Apply':'Buy'}</button>
        </div>
    );
};

export default Card;