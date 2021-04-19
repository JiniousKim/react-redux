import React, { useState } from 'react'
import store from '../store'

function DisplayNumber() {
  const [initNumber, setNumber] = useState(store.getState().number)

  store.subscribe(() => {
    setNumber(store.getState().number)
  })

  return (
    <div>
      <h1>Display Number</h1>
      <input value={initNumber} readOnly />
    </div>
  )
}

export default DisplayNumber
