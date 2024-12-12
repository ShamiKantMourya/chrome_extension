README: Offline Tic-Tac-Toe Chrome Extension

Project Overview:

The Offline Tic-Tac-Toe Chrome Extension is a simple, lightweight, and engaging extension built using React.js, TypeScript and for styling SASS is being used. It allows users to play a single-player Tic-Tac-Toe game directly from the Chrome toolbar, even when offline or without internet access. The game is designed for quick entertainment with an intuitive interface and random computer moves.

Features:

-> Offline Functionality: Play the game anytime without needing an internet connection.
-> Single-Player Mode: User vs. Computer gameplay.
-> Randomized Computer Moves: The computer ensures valid moves while playing.
-> Dynamic Game State: Handles win, lose, and draw conditions.
-> Interactive UI: Responsive and minimalistic design for a great user experience.

How to Use:

-> Click on the Tic-Tac-Toe icon in the Chrome toolbar.
-> A popup will appear with the game board.
-> Make the first move by clicking on any cell.
-> The computer will make its move automatically.
-> Continue playing until a win, loss, or draw is achieved.
-> Click "Restart Game" to reset the board and play again.

Project Structure:

chrome_extension/
├── public/
│   ├── manifest.json           # Chrome extension manifest
│   ├── tictoctoe16.png         # 16x16px icon size
│   ├── tictactoe48.png         # 48x48px icon size
│   ├── tictactoe128.png        # 128x128px icon size
├── src/
│   ├── components/
│   │   └── TicTacToe.js   # Main game component
│   ├── App.tsx            # React entry point
│   ├── main.tsx           # React entry point
├── index.html             
├── README.md              # Documentation file
│── .gitignore             # Files and folders which you don't want to push to githib
├── package.json           # Project metadata and dependencies
├── tsconfig.json          # Typescript config file

Tech Stack:

-> React.js: For building the user interface.
-> HTML/SASS: For styling the game board and popup.
-> JavaScript: Core logic for game functionality.
-> Chrome Extensions API: Integration with the Chrome browser.

Key Highlights:

-> React Hooks: Manage state and effects for the game logic.
-> Game Logic: Handles edge cases such as invalid moves, win conditions, and draw scenarios.
-> Responsive Design: Optimized for the Chrome popup window.
-> Manifest V3: Leverages the latest standards for Chrome extensions.

Future Enhancements: 

-> Add a score tracker for multiple games.
-> Implement a 2-player mode.
-> Add animations and sound effects for better user engagement.
-> Update UI of the game