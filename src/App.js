import React from 'react'
import AddNumberRoot from './Components/AddNumberRoot'
import DisplayNumberRoot from './Components/DisplayNumberRoot'
import './App.css'

const state = {
  number: 0,
}

function App() {
  return (
    <div className="App">
      <h1>Root</h1>
      <AddNumberRoot number={state.number} />
      <DisplayNumberRoot number={state.number} />
    </div>
  )
}

export default App
