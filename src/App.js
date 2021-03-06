import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Menu from './components/menu';
import Content from './components/content';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            menu: [{
                key: 1,
                path: '/',
                icon: 'fa fa-diamond'
            }, {
                key: 2,
                path: '/brand',
                icon: 'fa fa-gift'
            }, {
                key: 3,
                path: '/basket',
                icon: 'fa fa-shopping-basket'
            }, {
                key: 4,
                path: '/user',
                icon: 'fa fa-user-circle'
            }],
            activeMenu: 1
        };
    }

    handleMenuClick(key) {
        this.setState({ activeMenu: key});
    }

    componentDidMount() {
        var docElm = document.documentElement;


        if (docElm.requestFullscreen) {
            docElm.requestFullscreen();
        }

        //FireFox
        else if (docElm.mozRequestFullScreen) {
            docElm.mozRequestFullScreen();
        }

        //Chrome等
        else if (docElm.webkitRequestFullScreen) {
            docElm.webkitRequestFullScreen();
        }

        //IE11
        else if (docElm.msRequestFullscreen) {
            docElm.msRequestFullscreen();
        }

    }

    render() {
        return (<BrowserRouter>
                <div className="App">
                <Content  />
                <Menu menus={ this.state.menu } active={ this.state.activeMenu } setActive={ this.handleMenuClick.bind(this) } />
        </div></BrowserRouter>);
    }
}

export default App;
