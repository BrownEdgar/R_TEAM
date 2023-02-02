import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getAllAlbums from "./albumsApi";

const initialAlbumsvalue =[]

export const asyncAlbums = createAsyncThunk(
    "asyncAlbums",
    async (number) =>{
        const respons = await getAllAlbums(number)
        return respons
    }
)
export const albumsSlice = createSlice({
    name: "albums",
    initialState: initialAlbumsvalue,
    reducers:{
        addAlbums: (state, action) =>{
            return action.payload.albums
        }
    },
    extraReducers: (builder) =>{
        builder
        .addCase(asyncAlbums.pending, (state, action)=>{
            console.log("Loading...")
            
        })
        .addCase(asyncAlbums.fulfilled, (state, action)=>{
			console.log("Albumbs", action.payload)

            return action.payload
        })
        .addCase(asyncAlbums.rejected, (state, action)=>{
            console.log("cancellation")
        })
    }
})
export default albumsSlice.reducer
export const {addAlbums} = albumsSlice.actions