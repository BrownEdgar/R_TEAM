import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getAllPhotos from "./photosApi";
export const initialPhotosvalue = []

export const asyncPhotos =  createAsyncThunk(
    "asyncPhotos",
    async(number) => {
        const response = await getAllPhotos(number)
        return response
    }
)

export const photosSlice = createSlice({
    name: "photos",
    initialState: initialPhotosvalue,
    reducers:{
        addPhotos: (state, action)=>{
            return action.payload.photos
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(asyncPhotos.pending, (satae, action)=>{
            console.log("Loading...")
        })
        .addCase(asyncPhotos.fulfilled, (satae, action)=>{
            console.log("Photos", action.payload)
        })
        .addCase(asyncPhotos.rejected, (satae, action)=>{
            console.log("cancellation")
        })
    }
})
export default photosSlice.reducer
export const addPhotos = photosSlice.actions