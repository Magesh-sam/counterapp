import { CounterForm } from './components/CounterForm'
import { useSelector } from "react-redux";

import './styles/app.css'
import { Counter } from './components/Counter';
import { Annan } from './components/Annan';
import { Thambi } from './components/Thambi';
export const App = () => {

  const { amount } = useSelector(state => state.counter)
  console.log(typeof amount)

  return (
    <main >
      <h1 className='heading' >To-Do App </h1>
      <h2>Counter Value {amount}</h2>
      <CounterForm />
      <Counter />
      <Annan />
      <Thambi/>
    </main>
  )
}
