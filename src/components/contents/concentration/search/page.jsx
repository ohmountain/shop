import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SearchPage extends Component {

    render() {
        return (<Link to="/search/page" className='search-input-wrapper'>
                <div className='search-input'>
                    <i className='fa fa-search search-icon'></i>
                    <input className='search-default-text' defaultValue='XPS 15' />
                </div>
                </Link>);
    }
}

export default SearchPage;
