import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    amount: 0,
    number:1
}


const todoSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setNumber: (state, action) => {
            console.log(action.payload)
            state.number = action.payload
        },
        increment: (state) => {
            // state.amount = state.amount + state.number
            state.amount+=state.number
           
        },
        decrement: (state) => {
            state.amount = state.amount - state.number

            // state.amount-=state.number
        }

    }
})

export const { setNumber, increment, decrement } = todoSlice.actions
export default todoSlice.reducer