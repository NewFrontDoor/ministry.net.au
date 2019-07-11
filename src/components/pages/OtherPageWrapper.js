import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import About from '../frontpage/About';
import Slider from '../frontpage/Slider';



export default () => (
    <Router>
        {/*<div id="other-page-wrapper">*/}
        <Route path="/*" component={Slider} />
        <Route path="/*" component={About} />

        {/*</div>*/}
    </Router>
)