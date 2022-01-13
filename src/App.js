import './App.css';
import Canvas from './components/canvas.js';
import {useRef, useCallback} from 'react'
import searchNasa from './components/searchNasa.js'

function App() {
  // API key: kQv670YToeq0SuZ39J2d1V9rMjqZkVsjwNeLkYHt

  //const { canvases } = searchNasa();


  var passObj = {
    img: "https://images.unsplash.com/photo-1641966961473-5b083fd62fff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2MXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    title: "SATURN",
    date: "January 21, 2001",
    data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis, est ut posuere auctor, lacus nisi mollis sapien, vel ullamcorper purus ex eu enim. Etiam quis lorem consequat"

  }

  let canvases =[passObj,passObj,passObj,passObj,passObj,passObj,passObj,passObj,passObj,passObj]

  return (
    <div className="App">
      <span className="titleHeader">
        <h1 className>Spacestagram</h1>
      </span>
      <span>
        <Canvas obj={passObj}/>
        <Canvas obj={passObj}/>

        {canvases.map((passObj, i) => {

          return <Canvas obj={passObj}/>;
      })}

      </span>
    </div>
  );
}

export default App;
