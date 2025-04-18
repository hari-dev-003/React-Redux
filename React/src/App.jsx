import { useState } from 'react'
import Pizzabox from './components/Pizzabox'
import BurgerBox from './components/BurgerBox'
import './App.css'
import { Provider } from 'react-redux'
import store from './store/store'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Provider store={store}>
      <Pizzabox />
      <BurgerBox />
      </Provider>
    </>
  )
}

export default App
