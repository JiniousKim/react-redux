import React from 'react'
import { createStore } from 'redux'
import rootReducer from './Modules'

const store = createStore(rootReducer)
window.console.log(store.getState())

function App() {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  )
}

export default App
