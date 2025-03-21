import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    posts: [],
    isLoading: false,
    isError: false,
    error: null
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')

    return response.data;
})
// console.log(fetchPosts())

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.isError = false
                state.isLoading = true
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.isLoading = false,
                    state.isError = false,
                    state.posts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.isLoading = false,
                    state.isError = true,
                    state.error = action.error?.message
            })

    }

})

export default postsSlice.reducer;