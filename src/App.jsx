import { useState } from 'react'
import './App.css'
import TicTacToe from './tictactoe';
function App() {
  return(
    <div className="App p-8">
      <h1 className="text-4xl font-mono text-sky-400 font-bold mb-4">Tic Tac Toe</h1>
      <TicTacToe/>
      <footer className=''></footer>
    </div>
  )
}


export default App

