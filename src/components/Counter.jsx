import { useDispatch, useSelector } from "react-redux"
import {increment,decrement} from '../redux/todoSlice'
export const Counter = () => {

    const { number } = useSelector(state => state.counter)
    const dispatch = useDispatch()

  return (
      <section style={{display:'flex', gap:'50px'}} >
          <button onClick={()=>dispatch(increment())} >Inc by {number}</button>
          <button onClick={()=>dispatch(decrement())}  >Dec by {number}</button>
    </section>
  )
}
