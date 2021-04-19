import React, { useState } from 'react'
import DisplayNumber from './DisplayNumber'

function DisplayNumberRoot({ number }) {
  const [initNumber] = useState(number)

  return (
    <div>
      <h1>Display Number Root</h1>
      <DisplayNumber number={initNumber} />
    </div>
  )
}

export default DisplayNumberRoot
