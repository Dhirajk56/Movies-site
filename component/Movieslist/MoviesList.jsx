import React, { useEffect, useState } from "react";
import fire from "../../src/assets/fire.png"
import MovieCard from "./MovieCard";
import "./MoviesList.css"
const MoviesList = () =>{
    const [movies,setmovies]=useState([])
    useEffect (()=>{
        fetchMovies();
    },[])
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'a3e4d6c536msh229ee2dda2ffa20p132133jsnd03dfc5d9604',
		    'x-rapidapi-host': 'moviesdatabase.p.rapidapi.com'
        }
    };
    const fetchMovies= async()=> {
        const response= await fetch("https://moviesdatabase.p.rapidapi.com/titles/x/upcoming",options);
       const data=  await response.json()
       setmovies(data.results)
       console.log(data.results)
     
    }
    return(
       <section className="movie_list">
        <header className="movie_list_header">
            <h2 className="movie_list_heading"> Popular <img src={fire} alt="fire emoji" className="navbar_emoji" />
            </h2>
            <div className="movie_list_fs">
                <ul className="movie_filter">
                    <li className="movie_filter_item active">8+ star</li>
                    <li className="movie_filter_item">7+ star</li>
                    <li className="movie_filter_item">6+ star</li>
                </ul>
                <select name="" id="" className="movie_sorting">
                    <option value="" >sortBy</option>
                    <option value="" >Date</option>
                    <option value="" >Rating</option>
                </select>
                <select name="" id="" className="movie_sorting">
                    <option value="" >Ascending</option>
                    <option value="" >Decending</option>
                </select>
            </div>
        </header>
        <div className="movie_cards">
        <MovieCard/>
            {movies && movies.map(movie=><MovieCard key={movie.id} movie={movie}/>)}
            
        </div>
       </section>
    )
};
export default MoviesList;