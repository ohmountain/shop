import React, { Component } from 'react';

import { Route } from 'react-router-dom';

import {
    Concentration,
    Brand,
    Basket,
    User
} from './contents';

class Content extends Component {
    render() {
        return <div className='content'>
            <Route exact path="/" component={ Concentration } ></Route>
            <Route path="/brand" component={ Brand }></Route>
            <Route path="/basket" component={ Basket}></Route>
            <Route path="/user" component={ User }></Route>
            </div>
    }
}

export default Content;
