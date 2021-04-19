import React, { useState } from 'react'

function AddNumber(props) {
  const intiProp = props
  const number = useState(intiProp.number)
  const [initNumber, setNumber] = number

  const getNumber = (event) => {
    setNumber(event.target.value)
  }

  const toUpperComponent = () => {
    props.onClickValue(initNumber)
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
