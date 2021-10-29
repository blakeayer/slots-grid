import React, { useState } from 'react';
import './App.css';
import Grid from './components/Grid';
import Topbar from './components/Topbar';

function App() {

  const [gameList, setGameList] = useState([])

  const gameListSetter = (filteredGames) => {
    setGameList(filteredGames)
  }
  
  return (
    <div className="App">
      <Topbar gameListSetter={gameListSetter} />
      <div className="main-content">
        <Grid gameList={gameList} />
        {/* <Grid gameData={gameData} /> */}
      </div>
    </div>
  );
}

export default App;
