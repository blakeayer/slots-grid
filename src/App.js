import './App.css';
// import Flexbox from './components/Flexbox';
import Grid from './components/Grid';
import Topbar from './components/Topbar';
import gameData from './assets/data/game-data.json';

function App() {

  return (
    <div className="App">
      <Topbar />
      <div className="main-content">
        {/* <Flexbox gameData={gameData} /> */}
        <Grid gameData={gameData} />
      </div>
    </div>
  );
}

export default App;
