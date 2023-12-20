import React from "react";
import{ BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import App from "./App";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Board from "./Board";

const Main = () => {
    return(
        <Router>
            <div>
                <Header />
                <hr /> {/*구분선 */}
                <Routes>
                    <Route path="/" element={<App />}/>
                    <Route path="/about" element={<About />} />
                    <Route path="/todo" element={<App />}/>
                    <Route path="/board" element={<Board />}/>
                </Routes>
                <Footer />
            </div>
        </Router>
    )
}

export default Main;