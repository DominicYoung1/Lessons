import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
const [counter, setState] = useState (0);
const clickCounter = () => {
  console.log('I was clicked!')
  setState(counter + 1);
}
let Message = "MACHO MAN RANDY SAVAGE";
if (counter % 5 === 0 && counter !== 0)Message = "BONESAW IS READY";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {Message}
        </p>
        <button onClick = {clickCounter}>
          I have been clicked {counter} times!
        </button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> 
      </header>
    </div>
  );
}

export default App;
