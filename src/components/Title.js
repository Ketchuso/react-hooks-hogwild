import React from 'react';

function Title({ name, image }){
    return (
        <div>
            <h1>{name}</h1>
            <img src={image} alt={name}></img>
        </div>
    )
}

export default Title