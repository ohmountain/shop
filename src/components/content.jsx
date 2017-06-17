import React, { Component } from 'react';

import { Route } from 'react-router-dom';

import {
    Concentration,
    Brand,
    Basket,
    User
} from './contents';

import SearchPage from './contents/concentration/search/page';

class Content extends Component {
    render() {
        return <div className='content'>
            <Route exact path="/" component={ Concentration } ></Route>
            <Route path="/brand" component={ Brand }></Route>
            <Route path="/basket" component={ Basket}></Route>
            <Route path="/user" component={ User }></Route>
            <Route path="/search/page" component={ SearchPage }></Route>
            </div>
    }
}

export default Content;
