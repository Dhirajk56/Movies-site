import React from "react";
import star from "../../src/assets/star.png"
import "./MovieCard.css"
const MovieCard = ({movie}) =>{

    return(
        <>
        {movie ?<a href="movie.primaryImage?.url" className="movie_card">
            <img src={movie.primaryImage?.url} alt="movie image" className="movie_poster"/>
            <div className="movie_detail">
                <h3 className="movie_detail_heading">{movie.originalTitleText.text}</h3>
                <div className="movie_date_rate">
                    <p>{movie.releaseDate.Day + movie.releaseDate.month +movie.releaseDate.year }</p>
                    <p>8.0 <img src={star} alt="rating icon"  className="card_emoji"/></p>
                </div>
                <p className="movie_description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui commodi dolor ad praesentium eaque rerum nihil eius veritatis. Eligendi libero magni sapiente itaque iste harum veritatis at corporis iure ipsum!</p>
            </div>
        </a>:<></>}
       </>
    )
};
export default MovieCard;