import {  useSelector } from "react-redux"

export const Thambi = () => {
    const {amount} = useSelector(state => state.counter)
  return (
      <h1>Thambi account: {amount}</h1>
  )
}
