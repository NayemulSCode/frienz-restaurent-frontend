import React from 'react';

const Category = ({category, filterItems}) => {
    // const CategoryStyle= {
    //     textAlign : 'center',
    //     backgroundColor: 'transparent',
    //     padding:'5px',
    //     margin: '15px 15px 15px 0px',
    //     border: 'none',
    //     fontSize:'22px',
    //     textTransform: 'capitalize'
    // }
    return (
        <div className="category__main">
            {
                category.map((item, index) =>{
                    return <button className="category__button" key = {index} onClick={()=>filterItems(item)}>{item}</button>
                })
            }
        </div>
    );
};

export default Category;