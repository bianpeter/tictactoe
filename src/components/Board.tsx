import React, {ReactNode} from 'react';
import Square from './Square';

type SquareValue = 'X'| 'O'| null;

interface BoardProps {
  onClick(i: number) : void;
  squares: SquareValue[];
}

const Board: React.FC<BoardProps> = (props) => {

  const renderSquare = (i:number): ReactNode => {
    return(
      <Square
        value={props.squares[i]}
        onClick={() => props.onClick(i)}
      />
    )
  }

  return (
    <div className='board'>
      <div className='column'>
        <div className='row'>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className='row'>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className='row'>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
    </div>
  )
}

export default Board
