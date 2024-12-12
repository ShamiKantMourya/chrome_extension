import { useState } from "react";

import "./app.scss";

function App() {
    const [board, setBoard] = useState(Array(9).fill(null)); // Game board
    const [isUserTurn, setIsUserTurn] = useState(true); // User starts the game
    const [winner, setWinner] = useState(null); // Tracks the winner
  
// Check if a player has won
const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontal lines
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Vertical lines
    [0, 4, 8], [2, 4, 6],            // Diagonals
  ];
  for (let line of lines) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]; // Return 'X' or 'O'
    }
  }
  return null; // No winner yet
};
  
    // Handle user click
    const handleClick = (index) => {
      if (board[index] || winner) return; // Ignore if cell is filled or game over
  
      const newBoard = [...board];
      newBoard[index] = "X"; // User move
      setBoard(newBoard);
  
      const gameWinner = calculateWinner(newBoard);
      if (gameWinner) {
        setWinner(gameWinner);
        return;
      }
  
      setIsUserTurn(false); // Switch to computer turn
      setTimeout(() => computerMove(newBoard), 500); // Computer moves after a short delay
    };
  
    // Computer makes a random valid move
    const computerMove = (currentBoard) => {
      const emptyIndices = currentBoard
        .map((value, index) => (value === null ? index : null))
        .filter((value) => value !== null); // Find empty cells
  
      if (emptyIndices.length === 0) return; // No moves left
  
      const randomIndex = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
      currentBoard[randomIndex] = "O"; // Computer move
      setBoard(currentBoard);
  
      const gameWinner = calculateWinner(currentBoard);
      if (gameWinner) {
        setWinner(gameWinner);
        return;
      }
  
      setIsUserTurn(true); // Back to user's turn
    };
  
    // Restart the game
    const resetGame = () => {
      setBoard(Array(9).fill(null));
      setIsUserTurn(true);
      setWinner(null);
    };
  
    return (
      <div className="tictactoe">
        <h1>Tic-Tac-Toe</h1>
        {winner ? (
          <h2>{winner === "X" ? "You Win!" : "Computer Wins!"}</h2>
        ) : (
          <h2>{isUserTurn ? "Your Turn" : "Computer's Turn"}</h2>
        )}
        <div className="board">
          {board.map((value, index) => (
            <div
              key={index}
              className={`cell ${value}`}
              onClick={() => handleClick(index)}
            >
              {value}
            </div>
          ))}
        </div>
        <button onClick={resetGame}>Restart Game</button>
      </div>
  );
}

export default App;
