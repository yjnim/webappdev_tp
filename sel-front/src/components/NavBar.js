import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import logo from '../img/selab_logo_S.png';
import '../css/NavBar.css';

class NavBar extends Component {
    //네브바
    render() {
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