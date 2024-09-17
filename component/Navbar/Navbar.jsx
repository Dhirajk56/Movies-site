import React from "react";
import "./Navbar.css"
import fire from "../../src/assets/fire.png"
import star from "../../src/assets/glowing-star.png"
import party from "../../src/assets/partying-face.png"


const Navbar = () =>{
    return(
        <nav className="navbar">
            <h1>MoviesManiac</h1>

            <div className="navbar_links">
            <a href="">Popular <img src={fire} alt="fire emoji" className="navbar_emoji"/></a>
            <a href="">Popular <img src={star} alt="star emoji" className="navbar_emoji"/></a>
            <a href="">Popular <img src={party} alt="party emoji" className="navbar_emoji"/></a>
            </div>
        </nav>
    )
};
export default Navbar;