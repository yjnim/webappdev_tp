import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import './../../../css/Timetable.css';

import cse326thumb from './../../../img/WAD.jpg';

import CSE326 from './../routes/CSE326';

class Lectimetable extends Component {
    render() {
        return (
        <div className="Timetable-div">
            <div className="Timetable-part">
                <h1>Undergraduate Courses</h1>
                <hr className="Class-hr"></hr>
                <Link to="/Course/Lecture/CSE326">
                <div className="Class-div">
                    <img className="Class-thumbnail" src={cse326thumb}></img>
                    <div className="Class-info">
                        <p className="Class-sem">2019-2</p>
                        <p className="Class-code">CSE326</p>
                        <p className="Class-title">Web Application Development</p>
                    </div>
                </div>
                </Link>
                <div className="Class-div">
                    <img className="Class-thumbnail" src={cse326thumb}></img>
                    <div className="Class-info">
                        <p className="Class-sem">2019-2</p>
                        <p className="Class-code">CSE326</p>
                        <p className="Class-title">Web Application Development</p>
                    </div>
                </div>
            </div>
            <div className="Timetable-part">
                <h1>Undergraduate Courses</h1>
                <hr className="Class-hr"></hr>
                <div className="Class-div">
                    <img className="Class-thumbnail" src={cse326thumb}></img>
                    <div className="Class-info">
                        <p className="Class-sem">2019-2</p>
                        <p className="Class-code">CSE326</p>
                        <p className="Class-title">Web Application Development</p>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Lectimetable;