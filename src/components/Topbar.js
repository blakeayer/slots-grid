import React, { useState, useEffect } from 'react'
import classes from './topbar.module.css'

import FilterBtn from './FilterBtn';
import Search from './Search';
import gameData from '../assets/data/game-data.json';


const Topbar = ({gameListSetter}) => {

    const [activeFilterBtn, setActiveFilterBtn] = useState("ALL");
    const [filterInputValue, setFilterInputValue] = useState("");
    const [filteredGamesList, setFilteredGamesList] = useState([]);
    const [searchededGamesList, setSearchedGamesList] = useState([]);

    const filterBtnSetter = (filterData) => {
        setActiveFilterBtn(filterData);
    };

    const filterInputSetter = (filterData) => {
        setFilterInputValue(filterData);
    };

    useEffect(() => {
        const filteredGames = gameData.filter(({tags}) => tags.includes(activeFilterBtn));
        setFilteredGamesList(filteredGames)
    }, [activeFilterBtn])
    
    useEffect(() => {
        const searchedGames = filterInputValue 
        ? filteredGamesList.filter(({title}) => 
            title.toString().toLowerCase().includes(filterInputValue.toLowerCase())) 
        : filteredGamesList;
        setSearchedGamesList(searchedGames)
    }, [filteredGamesList, filterInputValue])
    
    useEffect(() => {
        gameListSetter(searchededGamesList)
    }, [gameListSetter, searchededGamesList])

    return (
        <div className={classes.topbar}>

            <div className={classes['topbar-left']}>
                <h2>SLOTS</h2>
            </div>

            <div className={classes['topbar-right']}>

                <div className={classes['filter-container']}>
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
