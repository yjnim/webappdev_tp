import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import CtrlRouer from './CtrlRouter';

const Root = () => (
    <BrowserRouter>
        <CtrlRouer></CtrlRouer>
    </BrowserRouter>
);

export default Root;