import React, {useContext} from 'react'
import {MovieContext} from "./MovieContext"
import "./Nav.css"
const Nav = () => {
    const [movies, setMovies] = useContext(MovieContext);
    return (
        <div className="navbar">
            <div className="navbar__items">
                    <h3>Anvesh Damuluri</h3>
                    <h4>List of movies :: {movies.length}</h4>               
            </div>
            
        </div>
    )
}

export default Nav
