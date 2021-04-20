import React, { useState } from 'react'

function AddNumber(props) {
  const [initNumber, setNumber] = useState(0)

  const toUpperComponent = () => {
    props.onClick(initNumber)
  }

  const getNumber = (number) => {
    setNumber(Number(number.target.value))
  }

  return (
    <div>
      <h1>Add Number</h1>
      <input type="button" value="+" onClick={toUpperComponent} />
      <input type="text" value={initNumber} onChange={getNumber} />
    </div>
  )
}

export default AddNumber
