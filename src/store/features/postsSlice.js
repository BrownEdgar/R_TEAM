//old way ===============================
// import { ADD_POST } from "../actionsTypes";
// import getAll from "./postApi";

// export const initialPostsValue = []

// export function postsReducer(state = [], action) {

// 	if (action.type === ADD_POST) {
// 		const isExist = state.find(post => post.id === action.payload.id)
// 		if (isExist) {
// 			return state;
// 		}
// 		return action.payload.posts
// 	}
// 	return state;
// }

// function addPost(posts) {
// 	return {
// 		type: ADD_POST,
// 		payload: {
// 			posts
// 		}
// 	}
// }

// export function loadAsyncData() {
// 	return async function (dispatch) {
// 		const allPosts = await getAll();
// 		dispatch(addPost(allPosts))
// 	}
// }

//new way ===============================

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getAll from "./postApi";
export const initialPostsValue = [];

export const asyncPost = createAsyncThunk(
	"asyncPosts",
	async () => {
	const response = await getAll();
		return response;
	}
)

export const postsSlice = createSlice({
	name: "posts",
	initialState: initialPostsValue,
	reducers: {
		addPosts: (state, action) => {
			return action.payload.posts
		},
	},
	extraReducers:(bulder) => {
		bulder
		.addCase(asyncPost.pending, (state,action) => {
			console.log("Loading...")
		})
		.addCase(asyncPost.fulfilled, (state,action) => {
			console.log("fulfilled:", action)
			return action.payload
		})
		.addCase(asyncPost.rejected, (state,action) => {
			console.log("rejected")
			return state
		})
	}
})




export default postsSlice.reducer;
export const { addPosts } = postsSlice.actions