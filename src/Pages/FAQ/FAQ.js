import React from 'react';

const FAQ = ({coures}) => {
    const {image} = coures
    return (
        <div>
                 <h2>This is a FAQ page </h2> 
             <img src={image} alt="..." />
   
                
        </div>
    );
};

export default FAQ;
