import React, { Component } from 'react';

import Menu from './components/menu';
import Content from './components/content';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            menu: [{
                key: 1,
                icon: 'fa fa-diamond'
            }, {
                key: 2,
                icon: 'fa fa-gift'
            }, {
                key: 3,
                icon: 'fa fa-shopping-basket'
            }, {
                key: 4,
                icon: 'fa fa-user-circle'
            }],
            activeMenu: 1
        };
    }

    handleMenuClick(key) {
        this.setState({ activeMenu: key});
    }

    render() {
        return (<div className="App">
                <Content />
                <Menu menus={ this.state.menu } active={ this.state.activeMenu } setActive={ this.handleMenuClick.bind(this) } />
        </div>);
    }
}

export default App;
