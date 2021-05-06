import React,{useState, useContext} from 'react'
import { MovieContext } from "./MovieContext"

const AddMovie = () => {
    const [name, setName] = useState("");
    const [price, setPrice] =useState("");
    const [movies, setMovies] = useContext(MovieContext);

    const addMovies = e =>{
        e.preventDefault();
        setMovies(prevMovies =>[...prevMovies, {name, price}])
    }
    return (
        <div>
            <form onSubmit={addMovies}>
                <input type="text" name="name" value={name} onChange={e =>{setName(e.target.value)}} id=""/>
                <input type="text" name="price" value={price} onChange={e =>{setPrice(e.target.value)}} id=""/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddMovie
