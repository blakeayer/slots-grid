import React from 'react'
import classes from './filterBtn.module.css';

const FilterBtn = ({filter, activeFilterBtn, icon, filterBtnSetter}) => {
    
    const isActive = (filter === activeFilterBtn)
    const filterClasses = isActive ? `${classes.active}` : ""

    return (
        <button className={classes['filter-btn']} onClick={() => filterBtnSetter(filter)} >
            <span className={filterClasses}>
                <i className={icon}></i>
                <p>{filter}</p>
            </span>
        </button>
    )
}

export default FilterBtn
