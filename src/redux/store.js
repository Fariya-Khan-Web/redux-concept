import { configureStore } from "@reduxjs/toolkit";
import countersReducer from './counters/countersSlice'

const store = configureStore({
    reducer: {
        counters: countersReducer,
    }
})

export default store;