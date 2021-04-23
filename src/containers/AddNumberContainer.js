import { connect } from 'react-redux'
import AddNumber from '../components/AddNumber'

const mapDispatchToProps = (dispatch) => ({
  onClick: (size) => {
    dispatch({ type: 'INCREMENT', size })
  },
})

export default connect(null, mapDispatchToProps)(AddNumber)

// import store from '../store'
// export default function AddNumberContainer() {
//   const toUpperComponent = (size) => {
//     store.dispatch({ type: 'INCREMENT', size })
//   }
//
//   return <AddNumber onClick={toUpperComponent} />
// }
