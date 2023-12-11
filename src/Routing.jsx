import React from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Home from "./Routingcompo/Home"
import Bollywood from "./Routingcompo/Bollywoodf/Bollywood";
import Technology from "./Routingcompo/Technology";
import Hollywood from "./Routingcompo/Hollywood";
import Food from "./Routingcompo/Food";
import CreateStore from "./Createstore";    

function Routing() {
    return (
        <main className="Routingbar">
            <BrowserRouter>
            <div className="Nav-Bar"> 
                <div>
                    <NavLink to='/' color="white">Home</NavLink>
                </div>
                <div>
                    <NavLink to='/bollywood'>Bollywood</NavLink>
                </div>
                <div>
                    <NavLink to='/technology'>Technology</NavLink>
                </div>
                <div>
                    <NavLink to='/hollywood'>Hollywood</NavLink>
                </div>
                <div>
                    <NavLink to='/food'>Food</NavLink>
                </div>
            </div>
                <CreateStore>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/bollywood" element={<Bollywood />} />
                    <Route path="/technology" element={<Technology />} />
                    <Route path="/hollywood" element={<Hollywood />} />
                    <Route path="/food" element={<Food />} />
                </Routes>
                </CreateStore>
            </BrowserRouter>
        </main>
    )
}

export default Routing;