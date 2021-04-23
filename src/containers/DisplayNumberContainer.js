import { connect } from 'react-redux'
import DisplayNumber from '../components/DisplayNumber'

// state 값은 redux state 값이 전달 된다.
const mapReduxStateToReactProps = (state) => ({
  number: state.number,
})

const mapReduxDispatchToReactProps = () => ({})

export default connect(
  mapReduxStateToReactProps,
  mapReduxDispatchToReactProps,
)(DisplayNumber)

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
