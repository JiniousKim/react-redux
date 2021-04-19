import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension' // 리덕스 개발자 도구

export default createStore((state, action) => {
  if (state === undefined) {
    return { number: 0 }
  }

  if (action.type === 'INCREMENT') {
    return {
      ...state,
      number: state.number + action.size,
    }
  }

  return state
}, composeWithDevTools())
