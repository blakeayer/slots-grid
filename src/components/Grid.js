import React from 'react'

const Grid = ({gameData}) => {
    return (
        // <div className="grid-wrapper">
            <div className="grid">
                {gameData.map((game, index) => {
                    return (
                        // <div key={index} className={`grid-item ${game.thumbSize}`}>
                            <img 
                                src={game.thumbSrc} 
                                alt={game.title[0]}
                                className={`grid-item ${game.thumbSize}`}
                            />
                        // </div>
                    )
                })}
            </div>
        // </div>
    )
}

export default Grid
