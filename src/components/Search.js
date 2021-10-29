import React from 'react'
import classes from './search.module.css'

const Search = ({icon, filterInputSetter}) => {
    return (
        <div className={classes['search-container']}>
            <input placeholder="Search" onChange={(event) => filterInputSetter(event.target.value)} />
            <button className={classes['search-btn'] }>
                <span>
                    <i className={icon}></i>
                </span>
            </button>
        </div>
    )
}

export default Search
