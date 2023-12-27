import React, { useState, useMemo } from 'react';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [result, setResult] = useState("First person to start is X");

  const resetClick = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setResult("First person to start is X");
  };

  const handleClick = (index) => {
    if (board[index] || calculateWinner(board)) {
      return;
    }

    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';

    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const renderSquare = (index) => (
    <button
      key={index}
      className="square rounded-xl bg-black text-3xl font-bold text-center w-16 h-16"
      onClick={() => handleClick(index)}
    >
      {board[index]}
    </button>
  );

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const [a, b, c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        setResult(`Winner: ${squares[a]}`);
        return squares[a];
      }
    }

    if (squares.every((square) => square !== null)) {
      setResult("It's a draw!");
    }
    else{
      setResult(`Next Move: ${isXNext?'X':'O'}`);
    }

    return null;
  };

  const calculateWinnerMemoized = useMemo(() => calculateWinner(board), [board]);
  const winner = calculateWinnerMemoized;
  const status = winner ? result : result;
  const squares = Array.from({ length: 9 }, (_, index) => renderSquare(index));

  return (
    <div>
      <div className="status text-xl font-mono text-amber-600 mb-4">{status}</div>
      <div className="board grid grid-cols-3 gap-2">{squares}</div>
      <div>
        <button
          className="mt-4 p-4 square rounded-xl bg-black text-xl font-bold text-white"
          onClick={resetClick}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default TicTacToe;
