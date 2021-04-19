import React, { useState } from 'react'
import store from '../store'

function AddNumber() {
  const [initNumber, setNumber] = useState(store.getState().number)

  const toUpperComponent = () => {
    store.dispatch({ type: 'INCREMENT', size: initNumber })
  }

  const getNumber = (number) => {
    setNumber(Number(number.target.value))
  }

  store.subscribe(() => {
    setNumber(store.getState().number)
  })

  return (
    <div>
      <h1>Add Number</h1>
      <input type="button" value="+" onClick={toUpperComponent} />
      <input type="text" value={initNumber} onChange={getNumber} />
    </div>
  )
}

export default AddNumber
