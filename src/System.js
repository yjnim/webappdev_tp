import React from 'react';
import {Problem, Answerset} from './Problem';
import { Link } from 'react-router-dom';

import './System.css';

// /System. 관리자 페이지라 치고 시도했으나...

class System extends React.Component {

    render() {
        return (
            <div className="System">
                <h1>System</h1>
                <p>Student_id</p>
                <p>{Answerset.Sid}</p>
                <p>Select Answer</p>
                <p>{Answerset.Asel}</p>
                <Link id="linkinSys" to="/">Move Home</Link>
            </div>
        )
    }
}

export default System;