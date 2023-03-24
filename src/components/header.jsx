import React, {useState} from "react";
import wtsapp from '../img/whatsapp.png'


import '../components/header.css'

function Header(){
    return(
        <header>
            <div>
            <a href="http://wa.me/+917795382526" ><img className="wtsapp" src={wtsapp} alt="" /></a>
            </div>
            <div className="headImg">
                <div className="headText">
                <h1>Creative Home Simpify your Furniture</h1>
                <p>Do i have consent to record this meeting gain locaion, root-and-branch, review, nor game plan who’s the goto</p>
                <button className="contBtn">Contact</button>
                </div>
            </div>
        </header>
    )}



    export default Header;