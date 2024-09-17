import React from "react";
import MoviesList from "../component/Movieslist/moviesList";
import Navbar from "../component/Navbar/Navbar";

import "./App.css"
const App = () =>{
    return(
        <div className="app">
            <Navbar/>
            <MoviesList/>
        </div>
    )
};
export default App;