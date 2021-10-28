import React from 'react'

import Filter from './Filter';
import Search from './Search';

const Topbar = () => {
    return (
        <div className="topbar">

            <div className="topbar-left">
                <h2>SLOTS</h2>
            </div>

            <div className="topbar-right">
                <div className="filter-container">
                    <Filter filter="ALL" icon="fab fa-buromobelexperte fa-lg" />
                    <Filter filter="NEW" icon="fas fa-award fa-lg" />
                    <Filter filter="TOP" icon="far fa-star fa-lg" />
                </div>
                
                <Search icon="fas fa-search fa-lg" />

            </div>

        </div>
    )
}

export default Topbar
