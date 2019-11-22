import React from 'react';
import { Link, Route } from 'react-router-dom';
import { Introduction } from 'pages';

const Introductions = ({match}) => {
    return (
        <div>
            <h2>Introduction</h2>
            <ul>
                <li><Link to={`${match.url}/1`}>Lec1</Link></li>
                <li><Link to={`${match.url}/2`}>Lec2</Link></li>
                <li><Link to={`${match.url}/3`}>Lec3</Link></li>
                <li><Link to={`${match.url}/4`}>Lec4</Link></li>
            </ul>
            <Route exact path={match.url} render={() => (<h3>Presentation</h3>)}/>
            <Route path={`${match.url}/:id`} component={Introduction}/>
        </div>
    );
};

export default Introductions;