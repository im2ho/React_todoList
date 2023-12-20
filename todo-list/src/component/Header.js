import React from "react";
import{ BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Header(){
    return(
        <header>
            <h1>My Website</h1>
            <nav>
                <ul>
                    {/*<li><a href="#home">Home</a></li>*/}
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><Link to="/todo">Todo</Link></li>
                    <li><Link to="/board">Board</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;