import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../../styles/search.css';

class Search extends Component {

    render() {
        return (<Link to="/search/page" className='search-input-wrapper'>
                <div className='search-input'>
                    <i className='fa fa-search search-icon'></i>
                    <span className='search-default-text'>XPS 15</span>
                </div>
                </Link>);
    }
}

export default Search;