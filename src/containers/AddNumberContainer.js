import React from 'react'
import AddNumber from '../components/AddNumber'
import store from '../store'

export default function AddNumberContainer() {
  const toUpperComponent = (size) => {
    store.dispatch({ type: 'INCREMENT', size })
  }

  return <AddNumber onClick={toUpperComponent} />
}
