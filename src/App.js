import React from "react";
// components importing
import Navbar from "./components/navbar";
import Header from './components/header';
import Ourservices from './components/ourservices'
import Portfolio from "./components/portfolio";
import Furniture from "./components/furniture";
import Footer from "./components/footer";
import Aboutus from "./components/aboutus";

function App(){
    return (
        <div>
            <Navbar/>    
            <Header/> 
            <Ourservices/>
            <Portfolio/>
            <Furniture/>
            <Aboutus/>
            <Footer/>
        </div>
    )
}


export default App;