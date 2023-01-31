import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getAllUsers from "./usersApi";

export const asyncUsers = createAsyncThunk(
	"asyncUsers",
	async () => {
		const response = await getAllUsers();
		console.log(response)
		return response;
	}
)
export const usersSlice = createSlice({
	name: "users",
	initialState: [],
	reducers: {
		deleteByUserId: (state,action) => {
			const newState = state.filter(elem => elem.id !== action.payload.id)
			return newState;
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(asyncUsers.pending ,(state,action) => {
				console.log("loading")
			})
			.addCase(asyncUsers.fulfilled, (state, action) => {
				console.log("fulfilled:", action)
				return action.payload
			})
			.addCase(asyncUsers.rejected, (state, action) => {
				console.log("rejected")
			})
	}
})

export default usersSlice.reducer
export const { deleteByUserId } = usersSlice.actions
