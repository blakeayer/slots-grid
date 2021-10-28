import React from 'react'

const Search = (props) => {
    return (
        <div className="search-container">
            <input placeholder="Search" />
            <button className="search-btn">
                <span >
                    <i className={props.icon}></i>
                </span>
            </button>
        </div>
    )
}

export default Search
