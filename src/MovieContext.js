import React, {useState, useContext, createContext} from "react";

export const MovieContext = createContext();

export const Movieprovider = (props)=> {
    const [movies, setMovies] = useState([{
                name : "bahubali",
                price : 15,
                language : "telugu",
            },
            {
                name : "KGF",
                price : 26,
                language : "Kannada"
            },
            {
                name : "Vakeel Saab",
                price : 30,
                language : "telugu"
            }
        ]);
        return(
            <MovieContext.Provider value={[movies,setMovies]}>
                {props.children}
            </MovieContext.Provider>
        )
}