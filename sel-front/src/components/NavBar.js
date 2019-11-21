import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import logo from '../img/selab_logo_S.png';
import '../css/NavBar.css';

class NavBar extends Component {
    //네브바
    render() {
        // function goMain() {
        //     var page1 = document.getElementsByClassName("Contents-page1")[0];
        //     var page2 = document.getElementsByClassName("Contents-page2")[0];
        //     page1.classList.remove("hidedisplay");
        //     page1.style.display = "block";
        //     page2.style.display = "none";
        //   }
          
        //   function goSELab() {
        //     var page1 = document.getElementsByClassName("Contents-page1")[0];
        //     var page2 = document.getElementsByClassName("Contents-page2")[0];
        //     page1.classList.remove("hidedisplay");
        //     page1.classList.add("hidedisplay");
        //     setTimeout(function() { 
        //       page1.style.display = "none"; 
        //       page2.classList.remove("newdisplay");
        //       page2.classList.add("newdisplay");
        //       page2.style.display = "block"; 
        //     }, 700);
        //   }

        return (
            <header className="App-header">
                <div className="Header-menudiv">
                <ul>
                    <li className="homeli">
                    <Link to="/" className="App-logo"><img src={logo} alt="logo" ></img></Link>
                    </li>
                    <li className="menuli">
                    <Link to="/Login">Login</Link>
                    </li>
                    <li className="menuli">
                    <Link to="/Course/Lecture">Courses</Link>
                    </li>
                    <li className="menuli">
                    <Link to="/About/Selab">About SELab</Link>
                    </li>
                </ul>
                </div>
            </header>
        );
    }
}

export default NavBar;