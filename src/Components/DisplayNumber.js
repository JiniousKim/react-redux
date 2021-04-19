import React from 'react'
import RealDisplay from './RealDisplay'

function DisplayNumber(displayNumber) {
  const { number } = displayNumber
  return (
    <div>
      <h1>Display Number</h1>
      <input value={number.number} readOnly />
      <RealDisplay number={number.number} />
    </div>
  )
}

export default DisplayNumber
