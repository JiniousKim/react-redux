import React from 'react'

function DisplayNumber({ number }) {
  return (
    <div>
      <h1>Display Number</h1>
      <input value={number} readOnly />
    </div>
  )
}

export default DisplayNumber
