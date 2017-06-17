import React, { Component } from 'react';

import '../../../styles/search.css';

class Search extends Component {

    render() {
        return (<div className='search-input-wrapper'>
                <div className='search-input'>
                    <i className='fa fa-search search-icon'></i>
                    <span className='search-default-text'>XPS 15</span>
                </div>
                </div>);
    }
}

export default Search;
