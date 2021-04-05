import React from 'react';

const BreakFirst = ({meal}) => {
    const {name,img,price,description} = meal;
    return (
        <div className="meal">
            <img src={img} className="meal__image" />
            <h3 className="meal__name">{name}</h3>
            <p className="meal__desc">{description} <span className="meal__desMore">View More</span></p>
            <div className="meal__priceOrder">
                <p className="meal__price">{price}<span style={{fontWeight:"bolder"}}>&#2547;</span> </p>
                <button>Order Now</button>
            </div>
        </div>
    );
};

export default BreakFirst;