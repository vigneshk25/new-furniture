import React from "react";
// components importing
import Navbar from "./components/navbar";
import Header from './components/header';
import Ourservices from './components/ourservices'
import Portfolio from "./components/portfolio";
import Furniture from "./components/furniture";
import Footer from "./components/footer";

function App(){
    return (
        <div>
            <Navbar/>    
            <Header/> 
            <Ourservices/>
            <Portfolio/>
            <Furniture/>
            <Footer/>
        </div>
    )
}


export default App;