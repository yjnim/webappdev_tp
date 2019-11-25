import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

// Component import
import NavBar from './components/NavBar';

import Home from './routes/Home';
import Selab from './routes/About/Selab';
import Lecture from './routes/Course/Lecture';
import Login from './routes/Login';
import NoMatch from './routes/NoMatch';

// CSS import
import './css/App.scss';

const pageTrans = 'trans'
const classNames = {
  appear: `${pageTrans} appear`,
  appearActive: `${pageTrans} appear active`,
  appearDone: `${pageTrans} appear done`,
  enter: `${pageTrans} enter`,
  enterActive: `${pageTrans} enter active`,
  enterDone: `${pageTrans} enter done`,
  exit: `${pageTrans} exit`,
  exitActive: `${pageTrans} exit active`,
  exitDone: `${pageTrans} exit done`
}


class App extends Component {
  render () {
    return (
      <Router>
        <div className="App">
          <NavBar /> 
          <div className="App-container">
            <div className="App-mainbg">
              <Route
              render={({ location }) => (
              <TransitionGroup>
                <CSSTransition
                  key={location.pathname}
                  timeout={700}
                  classNames={classNames}
                  >
                  <Switch location={location}>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/About/Selab" component={Selab} />
                    <Route exact path="/Course/Lecture" component={Lecture} />
                    <Route exact path="/Login" component={Login} />
                    <Route component={NoMatch} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
              )} />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}


export default App;
