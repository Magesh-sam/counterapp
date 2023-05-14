import { configureStore } from "@reduxjs/toolkit";
// counterslice
import counterReducer from './todoSlice'

export const store = configureStore(
   { reducer: {
        counter:counterReducer
    }}
)