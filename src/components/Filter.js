import React from 'react'

const Filter = (props) => {

    const clickHandler = () => {
        
    }

    return (
        <button className="filter-btn" onClick={clickHandler} >
            <span style={{color: "#00A9E0"}}>
                <i className={props.icon}></i>
                <p>{props.filter}</p>
            </span>
        </button>
    )
}

export default Filter
