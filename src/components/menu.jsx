import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
    handleMenuClick(key) {
        this.props.setActive(key);
    }

    render() {
        return <div className='menu'>
            { this.props.menus.map(menu => {
                return (<Link key={ menu.key } to={ menu.path }  onClick={ () => { this.handleMenuClick(menu.key); } } className={ this.props.active === menu.key ? 'item active' : 'item' }><i className={ menu.icon }></i></Link>);
            }) }
        </div>
    }
}

export default Menu;
