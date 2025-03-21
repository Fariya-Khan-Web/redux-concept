import { configureStore } from "@reduxjs/toolkit";
import countersReducer from './slices/countersSlice'
import postsReducer from './slices/postsSlice'

const store = configureStore({
    reducer: {
        counters: countersReducer,
        posts: postsReducer,
    }
})

export default store;