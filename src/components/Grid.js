import React from 'react'
import classes from './grid.module.css';

const Grid = ({gameList}) => {
    return (
        <div className={classes.grid}>
            {gameList && gameList.map((game, index) => {
                return (
                    <div key={index} className={`${classes['grid-item']} ${game.thumbSize}`}>
                        <img 
                            src={game.thumbSrc} 
                            alt={game.title[0]}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default Grid
