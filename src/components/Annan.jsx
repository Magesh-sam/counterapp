import {  useSelector } from "react-redux"

export const Annan = () => {
    const {amount} = useSelector(state => state.counter)
  return (
      <h1>Annan account: {amount}</h1>
  )
}
