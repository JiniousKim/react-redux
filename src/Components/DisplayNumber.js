import React, { useState } from 'react'
import RealDisplay from './RealDisplay'

function DisplayNumber({ number }) {
  const [initNumber] = useState(number)

  return (
    <div>
      <h1>Display Number</h1>
      <input value={initNumber} readOnly />
      <RealDisplay number={initNumber} />
    </div>
  )
}

export default DisplayNumber
