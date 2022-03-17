import React from 'react';
import Tina from './img/DOUBLE-T PRODUCTIONS.png'


export default function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="imgbox">
        <img className="img" src={Tina} alt='Tina'></img>
        </div>
    </header>
    </div>
  );
}

