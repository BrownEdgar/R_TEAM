import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getAllComments from "./commentsApi";


export const initialCommentsvalue = []
export const asyncComments = createAsyncThunk(
    "asyncComments",
    async (number) =>{
        const response = await getAllComments(number)
        return response
    }
)
export const commentsSlice = createSlice ({
    name:"comments",
    initialState: initialCommentsvalue,
    reducers:{
        addComments:(state, action) =>{
            console.log(action.payload)
            return action.payload.comments
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(asyncComments.pending, (state, action)=>{
            console.log("Loading...")
            
        })
        .addCase(asyncComments.fulfilled, (state, action)=>{
			console.log("fulfilled:", action.payload)

            return action.payload
        })
        .addCase(asyncComments.rejected, (state, action)=>{
            console.log("cancellation")
        })
    }
 })

 export default commentsSlice.reducer
 export const {addComments} = commentsSlice.actions
