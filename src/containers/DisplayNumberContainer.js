import { connect } from 'react-redux'
import DisplayNumber from '../components/DisplayNumber'

export default connect()(DisplayNumber)

/*
import React, { useState } from 'react'
import store from '../store'

function DisplayNumberContainer() {
  const [number, setNumber] = useState(0)
  store.subscribe(() => {
    setNumber(store.getState().number)
  })

  return <DisplayNumber number={number} />
}

export default DisplayNumberContainer
*/
