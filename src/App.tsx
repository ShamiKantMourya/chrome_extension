import React, { useState } from "react";

import "./app.scss";

type BoardType = (string | null)[];

const App: React.FC = () => {
  const [board, setBoard] = useState<BoardType>(Array(9).fill(null)); // Game board
  const [userTurn, setUserTurn] = useState<boolean>(true); // User starts the game
  const [winner, setWinner] = useState<string | null>(null); // Tracks the winner
  const [isGameOver, setIsGameOver] = useState<boolean>(false); // Tracks if the game is over
  const [userScore, setUserScore] = useState<number>(0); // User win count
  const [computerScore, setComputerScore] = useState<number>(0); // Computer win count

  // Check if a player has won
  const calculateWinner = (squares: BoardType): string | null => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // Horizontal lines
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // Vertical lines
      [0, 4, 8],
      [2, 4, 6], // Diagonals
    ];
    for (let line of lines) {
      const [a, b, c] = line;
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a]; // Return 'X' or 'O'
      }
    }
    return null; // No winner yet
  };

  // Handle user click
  const handleClick = (index: number) => {
    if (board[index] || winner || isGameOver) return;

    const newBoard = [...board];
    newBoard[index] = "X";
    setBoard(newBoard);

    const gameWinner = calculateWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
      if (gameWinner === "X") setUserScore(userScore + 1); // Increment user score
      return;
    }

    // Check for a draw
    if (!newBoard.includes(null)) {
      setIsGameOver(true); // Mark game as over
      return;
    }

    setUserTurn(false); // Switch to computer turn
    setTimeout(() => computerMove(newBoard), 500); // Computer moves after a short delay
  };

  // Computer makes a random valid move
  const computerMove = (currentBoard: BoardType) => {
    const emptyIndices = currentBoard
      .map((value, index) => (value === null ? index : null))
      .filter((value) => value !== null); // Find empty cells

    if (emptyIndices.length === 0) return; // No moves left

    const randomIndex =
      emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
    currentBoard[randomIndex] = "O"; // Computer move
    setBoard(currentBoard);

    const gameWinner = calculateWinner(currentBoard);
    if (gameWinner) {
      setWinner(gameWinner);
      if (gameWinner === "O") setComputerScore(computerScore + 1); // Increment computer score
      return;
    }

    // Check for a draw
    if (!currentBoard.includes(null)) {
      setIsGameOver(true); // Mark game as over
      return;
    }

    setUserTurn(true); // Back to user's turn
  };

  // Restart the game
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setUserTurn(true);
    setWinner(null);
    setIsGameOver(false);
  };

  return (
    <>
      <div className="img-box">
        <img src="/background.jpg" alt="skyline" />
      </div>
      <div className="tictactoe">
        <h1>Tic-Tac-Toe ⭕❌</h1>
        {winner ? (
          <h2>{winner === "X" ? "You Win! 🎉" : "Computer Wins! 🎉"}</h2>
        ) : isGameOver ? (
          <h2>Game Over! It's a Draw.</h2>
        ) : (
          <h2>{userTurn ? "Your Turn 🧑🏼" : "Computer's Turn 💻"}</h2>
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
        <button className="neu-btn" onClick={resetGame}>
          Restart Game
        </button>
      </div>
      <div className="scores">
        <div className="score-box user-score">
          <h3>User 🧑🏼</h3>
          <p>{userScore}</p>
        </div>
        <div className="score-box computer-score">
          <h3>Computer 💻</h3>
          <p>{computerScore}</p>
        </div>
      </div>
    </>
  );
};

export default App;
