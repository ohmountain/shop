import React, { Component } from 'react';

class Menu extends Component {
    handleMenuClick(key) {
        this.props.setActive(key);
    }

    render() {
        return <div className='menu'>
            { this.props.menus.map(menu => {
                return (<div key={ menu.key } onClick={ () => { this.handleMenuClick(menu.key); } } className={ this.props.active === menu.key ? 'item active' : 'item' }><i className={ menu.icon }></i></div>);
            }) }
        </div>
    }
}

export default Menu;
