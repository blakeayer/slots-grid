import React from 'react'

const Flexbox = ({gameData}) => {
    return (
        // <div className="grid-wrapper">
            <div className="flex">
                {gameData.map((game, index) => {
                    return (
                        <div key={index} className={`flex-item ${game.thumbSize}`}>
                            <img 
                                src={game.thumbSrc} 
                                alt={game.title[0]}
                                className={`flex-item ${game.thumbSize}`}
                            />
                        </div>
                    )
                })}
            </div>
        // </div>
    )
}

export default Flexbox
