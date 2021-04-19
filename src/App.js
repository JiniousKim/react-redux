import React from 'react'
import AddNumberRoot from './Components/AddNumberRoot'
import DisplayNumberRoot from './Components/DisplayNumberRoot'
import './App.css'

const state = {
  number: 0,
}

function App() {
  window.console.log(state.number)
  return (
    <div className="App">
      <h1>Root</h1>
      <AddNumberRoot />
      <DisplayNumberRoot number={state} />
    </div>
  )
}

export default App
