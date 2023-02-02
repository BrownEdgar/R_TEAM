import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getAllPosts from "./postApi";

export const initialPostsvalue = []
export const asyncPosts = createAsyncThunk(
    "asyncPosts",
    async (number) => {
        const response = await getAllPosts(number);
        return response;
    },
)

export const postSlice = createSlice({
    name: "posts",
    initialState: initialPostsvalue,
    reducers:{
        addPosts: (state, action )=>{
            return action.payload.posts
        }
    },
    extraReducers: (builder) =>{
        builder
        .addCase(asyncPosts.pending, (state, action)=>{
            console.log("Loading...")
            
        })
        .addCase(asyncPosts.fulfilled, (state, action)=>{
			console.log("Posts:", action.payload)

            return action.payload
        })
        .addCase(asyncPosts.rejected, (state, action)=>{
            console.log("cancellation")
        })
    }
})
export default postSlice.reducer
export const {addPosts} = postSlice.actions
