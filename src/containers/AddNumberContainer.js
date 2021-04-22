import { connect } from 'react-redux'
import AddNumber from '../components/AddNumber'

export default connect()(AddNumber)

// import store from '../store'
// export default function AddNumberContainer() {
//   const toUpperComponent = (size) => {
//     store.dispatch({ type: 'INCREMENT', size })
//   }
//
//   return <AddNumber onClick={toUpperComponent} />
// }
