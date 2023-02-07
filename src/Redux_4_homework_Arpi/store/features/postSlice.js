import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getAllPosts from "./postApi";

export const initialPostsvalue = []
export const asyncPosts = createAsyncThunk(
    "asyncPosts",
    async (number) => {
        const response = await getAllPosts(number);
        return response;
    },
)

export const myOwnPost =  createAction("add_post")

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
					.addCase(myOwnPost, (state, action) => {
						return [
							{
								"userId": 1,
								"id": 5,
								"title": " occaecati excepturi optio reprehenderit",
								"body": "quia strum rerum est autem sunt rem eveniet architecto"
							}
						]
					})
    }
})
export default postSlice.reducer
export const {addPosts} = postSlice.actions
