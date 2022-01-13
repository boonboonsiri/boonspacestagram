import './App.css';

import Canvases from './components/Canvases.js';

function App() {

  //Brought to you by NASA's APOD API

  return (
    <div className="App">
      <div className="header">
        <span className="titleHeader">
          <h1>Spacestagram</h1>
        </span>
        <div className="paragraphContainer">
          <p>Brought to you by NASA's APOD API. Hover on images to like. :)</p>
        </div>
      </div>
      <span>
        <Canvases/>
      </span>
    </div>
  );
}

export default App;
