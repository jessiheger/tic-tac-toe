import React, {useState, useEffect } from 'react';

function Square(props) {
    const { whosTurn, switchShape, positionOnBoard, setUpdatedBoard } = props;
    const [ myShape, setMyShape ] = useState("");

    const onClick = (positionOnBoard) => {
        if (myShape === "") {
            setMyShape(whosTurn);
            setUpdatedBoard(whosTurn, positionOnBoard);
            switchShape(whosTurn);
        }
    }

    return (
        <div onClick={() => onClick(positionOnBoard)} style={Square.styles.square}>
            {myShape}
        </div>
    )
}

Square.styles = {
    square: {
        width: '100px',
        height: '100px',
        border: '2px solid black',
    }
}

export default Square;
