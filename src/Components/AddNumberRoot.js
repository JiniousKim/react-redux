import React, { useState } from 'react'
import AddNumber from './AddNumber'

function AddNumberRoot({ number }) {
  const initNumber = useState(number)[0]
  const execFunc = (value) => {
    window.console.log(`root value = ${value}`)
  }

  return (
    <div>
      <h1>Add Number Root</h1>
      <AddNumber number={initNumber} onClickValue={execFunc} />
    </div>
  )
}

export default AddNumberRoot
