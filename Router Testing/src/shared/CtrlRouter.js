import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, Lecture, Introductions } from 'pages';
import Menu from '../components/Menu';


class App extends Component {
    render() {
        return (
            <div>
                <Menu></Menu>
                <Route exact path="/" component={Home}/>
                <Route exact path="/Lecture" component={Lecture}/>
                <Route path="/Lecture/Introductions" component={Introductions}/>
            </div>
        );
    }
}

export default App;