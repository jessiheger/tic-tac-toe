import './App.css';
import Board from './Board';
import React, {useState, useEffect } from 'react';

function App() {
  const [ whosTurn, setWhosTurn ] = useState("X");
  const [ updatedBoard, setUpdatedBoard ] = useState({"X": [], "O": []});
  const [ winner, setWinner ] = useState(null);
  const winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

  const switchShape = (shapeJustPlayed) => {
    if (shapeJustPlayed === "X") {
      setWhosTurn("O")
    } else {
      setWhosTurn("X")
    }
  }

  const handleUpdateBoard = (shape, position) => {
    const board = Object.assign(updatedBoard, {});
    board[shape] = [...board[shape], position];
    setUpdatedBoard(board);
  }

  useEffect(() => {
    winningCombinations.forEach( arr => {
      if (arr.every(num => updatedBoard["X"].includes(num))) {
        setWinner("X")
        console.log("winning combo", arr);
      }
      else if (arr.every(num => updatedBoard["O"].includes(num))) {
        setWinner("O")
        console.log("winning combo", arr);
      }
    })
  }, [whosTurn])

  return (
    <div className="App">
      {winner !== null 
        ? <div>Player {winner} wins!!</div>
        : <div>It's Player {whosTurn}'s turn!</div>
      }
      <Board 
        whosTurn={whosTurn}
        switchShape={switchShape}
        setUpdatedBoard={handleUpdateBoard}
        updatedBoard={updatedBoard}
      />
    </div>
  );
}

export default App;
