import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './../../css/Lecture.scss';

import Lectimetable from './components/Lectimetable.js';
import CSE326 from './routes/CSE326';

const pageTrans = 'trans-l'
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


class Lecture extends Component {
    //메인 화면
    render() {
        return(
            <Router>
                <div className="Contents-page2">
                <Route
                render={({ location }) => (
                <TransitionGroup>
                    <CSSTransition
                    key={location.pathname}
                    timeout={700}
                    classNames={classNames}
                    >
                    <Switch location={location}>
                    <Route exact path="/Course/Lecture/" component={Lectimetable} />
                    <Route exact path="/Course/Lecture/CSE326/" component={CSE326} />
                    </Switch>
                    </CSSTransition>
                </TransitionGroup>
                )} />
                </div>
            </Router>
        );
    }
}

export default Lecture;