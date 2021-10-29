import React, { useState, useEffect } from 'react'

import FilterBtn from './FilterBtn';
import Search from './Search';
import gameData from '../assets/data/game-data.json';


const Topbar = ({gameListSetter}) => {

    const [activeFilterBtn, setActiveFilterBtn] = useState("ALL");
    const [filterInputValue, setFilterInputValue] = useState("");

    // const [filteredGamesList, setFilteredGamesList] = useState();
    // const [searchededGamesList, setSearchedGamesList] = useState();

    const filterBtnSetter = (filterData) => {
        setActiveFilterBtn(filterData);
    };

    const filterInputSetter = (filterData) => {
        setFilterInputValue(filterData);
    };

    const filteredGames = gameData.filter(({tags}) => tags.includes(activeFilterBtn));
    
    // useEffect(() => {
    //     setFilteredGamesList(filteredGames)
    // }, [filteredGames])
    
    const searchedGames = filterInputValue 
        ? filteredGames.filter(({title}) => 
            title.toString().toLowerCase().includes(filterInputValue.toLowerCase())) 
            // title.toString().toLowerCase().indexOf(filterInputValue.toLowerCase()) !== -1) 
        : filteredGames;
    
    useEffect(() => {
        gameListSetter(searchedGames)
    }, [gameListSetter, searchedGames])

    return (
        <div className="topbar">

            <div className="topbar-left">
                <h2>SLOTS</h2>
            </div>

            <div className="topbar-right">

                <div className="filter-container">
                    <FilterBtn 
                        filter="ALL"
                        activeFilterBtn={activeFilterBtn} 
                        icon="fab fa-buromobelexperte fa-lg" 
                        filterBtnSetter={filterBtnSetter} />
                    <FilterBtn 
                        filter="NEW" 
                        activeFilterBtn={activeFilterBtn}
                        icon="fas fa-award fa-lg" 
                        filterBtnSetter={filterBtnSetter} />
                    <FilterBtn 
                        filter="TOP" 
                        activeFilterBtn={activeFilterBtn}
                        icon="far fa-star fa-lg" 
                        filterBtnSetter={filterBtnSetter} />
                </div>
                
                <Search 
                    icon="fas fa-search fa-lg" 
                    filterInputSetter={filterInputSetter} 
                />
            </div>

        </div>
    )
}

export default Topbar
