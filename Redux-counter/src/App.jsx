import Counter from "./Components/counter"
import Counter1 from "./Components/counter1"
import Counter2 from "./Components/counter2"
import { stor } from "./Storage/Store"
import {Provider} from 'react-redux'

function App() {

  return (
    <>
      <Provider store={stor}>
          <Counter></Counter>
          <Counter1></Counter1>
          <Counter2></Counter2>
      </Provider>
    </>
  )
}

export default App
