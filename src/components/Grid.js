import React from 'react'

const Grid = ({gameList}) => {
    return (
        <div className="grid">
            {gameList && gameList.map((game, index) => {
                return (
                    <div key={index} className={`grid-item ${game.thumbSize}`}>
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
