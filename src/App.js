import React, { useState } from 'react';
import './App.css';

const cols = 24
const rows = 20
const margin = 2
const width = 40

const maxWidth =  cols * (width + 2* margin)
const divStyle = {
  margin,
  width,
  minHeight: 22,
  float: 'left',
  backgroundColor: '#4b104b',
  color: 'white',
  cursor: 'pointer'
}

const getRandomX = () =>  Math.floor(Math.random() * cols)
const getRandomY = () =>  Math.floor(Math.random() * rows)


function App() {
  const [output, setOutoput] = useState('Clik Anywhere')
  const [moves, setMoves] = useState(0)
  const [rx, setRadnomX] = useState(()=> getRandomX())
  const [ry, setRadnomY] = useState(()=> getRandomY())
  
  const board = Array(rows).fill().map(() => Array(cols).fill(0))
  const resetGame = () => {
    setOutoput('Clik Anywhere')
    setMoves(0)
    setRadnomX(()=> getRandomX())
    setRadnomY(() => getRandomY())
  }
 
  return (
    <>
    <h2> {output} </h2>
    <div className="App"  style={{width: maxWidth}} >
      {board.map((row, y) => row.map((col, x) => {
        const check = () => {
          setMoves(num => num += 1)
          if (x === rx && y === ry) return 'X' 
          else if( y > ry ) return '⇡' 
          else if(y < ry) return '⇣' 
          else if(x > rx) return '⇠' 
          else return '⇢' 
        }
        
        return (
          <div 
          key={x+ cols*y} style={divStyle} 
          onClick={() => setOutoput(check()) }
          className={'box'} > 
            
          </div>
        )
      }))}
    </div>
    {output === 'X' && <div className="center">
      <div className="popup"> 
        <h1>You win!</h1>
        <h1>Your moves: {moves}</h1>
        <div className="button" onClick={() => resetGame()}>
          Try  Again
        </div>
       </div>
    </div>}
    </>
  );
}

export default App;
