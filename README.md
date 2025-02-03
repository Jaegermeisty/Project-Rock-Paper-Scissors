# Rock Paper Scissors Console Game

A simple browser-based Rock Paper Scissors game implemented through the JavaScript console, created as part of [The Odin Project](https://www.theodinproject.com/) curriculum.

## Features
- 🎮 5-round matches against computer opponent
- 📊 Real-time score tracking in console
- 🎲 Random computer choice generation
- 📝 Case-insensitive player input
- 🏆 Final score comparison

## How to Play
1. Open `index.html` in a web browser
2. Press `F12` to open developer tools (console)
3. When prompted, type **Rock**, **Paper**, or **Scissors**
4. Game automatically plays 5 rounds
5. View final results in console

## Game Rules
- Paper beats Rock 📄 > 🪨
- Rock beats Scissors 🪨 > ✂️
- Scissors beat Paper ✂️ > 📄
- Matching choices result in tie rounds

## Code Structure
```javascript
// Computer's random choice generator
function getComputerChoice() { ... }

// Player input handler
function getHumanChoice() { ... }

// Single round comparator
function playRound(humanChoice, computerChoice) { ... }

// Main game controller (5-round loop)
function playGame() { ... }
