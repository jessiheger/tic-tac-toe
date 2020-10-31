import React from 'react';
import Square from './Square';

const Board = (props) => {
    const { whosTurn, setShapeToPlay, switchShape, setUpdatedBoard, updatedBoard } = props;

    const squaresOnBoard = [0,1,2,3,4,5,6,7,8];

    return (
        <div style={Board.styles.board} className="board">
        { squaresOnBoard.map( (num, index) => {
            return (
                <Square 
                key={num}
                positionOnBoard={index}    
                whosTurn={whosTurn}
                switchShape={switchShape}
                setUpdatedBoard={setUpdatedBoard}
                updatedBoard={updatedBoard}
                ></Square>
            )
        })}
       </div>
    );
  }

  Board.styles = {
      board: {
        width: '350px',
        display: 'flex',
        flexWrap: 'wrap',
      }
  }
  
  export default Board;