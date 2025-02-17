import React from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Details from "./pages/Details.jsx";
import Navbar from "./components/Navbar.jsx";

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path={"/"} element={<Home />}></Route>
                <Route path={"/details/:id"} element={<Details />}></Route>
            </Routes>
        </Router>
    )
}
export default App
