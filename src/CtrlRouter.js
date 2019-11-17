import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { default as Home } from './App';
import { default as System } from './System';

//라우터 컨트롤
class CtrlRouter extends Component {
    render() {
        return (
            <div className="CtrlRout">
                <Route exact path="/" component={Home}/>
                <Route path="/System" component={System}/>
            </div>
        )
    }
}

export default CtrlRouter;