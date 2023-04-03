import React from "react";
// components importing
import Header from './components/header';
import Ourservices from './components/ourservices'
import Portfolio from "./components/portfolio";
import Furniture from "./components/furniture";
import Aboutus from "./components/aboutus";

function App(){
    return (
        <div>
            <Header/> 
            <Ourservices/>
            <Portfolio/>
            <Furniture/>
            <Aboutus/>
        </div>
    )
}


export default App;