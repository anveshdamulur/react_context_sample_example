import React from 'react'
const Movie = ({name, price}) => {
    return (
        <div>
         <h4>{name}</h4>
         <li>{price}</li>
        </div>
    )
}

export default Movie
