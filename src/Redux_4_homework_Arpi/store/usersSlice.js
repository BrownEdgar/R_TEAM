import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getAllusers from "./usersApi";
export const initialUsersvalue = []

export const asyncUsers = createAsyncThunk(
    "asyncUsers",
    async (number) =>{
        const response = await getAllusers(number)
        return response
    }
)
export const usersSlice =  createSlice({
    name: "users",
    initialState: initialUsersvalue,
    reducers: {
        addUsers: (state, action) => {
            return action.payloud.users
        }
    },
    extraReducers: (builder)=>{
        builder
        .addCase(asyncUsers.pending, (state, action)=>{
            console.log("Loading...")
            
        })
        .addCase(asyncUsers.fulfilled, (state, action)=>{
			console.log("Users:", action.payload)

            return action.payload
        })
        .addCase(asyncUsers.rejected, (state, action)=>{
            console.log("cancellation")
        })
    }
})

export default usersSlice.reducer
export const {addUsers} = usersSlice.actions