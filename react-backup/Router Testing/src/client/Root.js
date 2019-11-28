import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import CtrlRouter from '../shared/CtrlRouter';

const Root = () => (
    <BrowserRouter>
        <CtrlRouter></CtrlRouter>
    </BrowserRouter>
);

export default Root;