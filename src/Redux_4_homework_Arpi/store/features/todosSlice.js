import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getAllTodos from "./todosApi";
export const initialTodosvalue = []

export const asyncTodos =  createAsyncThunk(
    "asyncTodos",
    async (number)=>{
        const response = await getAllTodos(number)
        return response
    }
)

export const todosSlice = createSlice({
    name:"todos",
    initialState : initialTodosvalue,
    reducers: {
       AddTodos: (state, action) => {
        return action.payload.todos
        }
    },
    extraReducers: (builder)=>{
        builder
        .addCase(asyncTodos.pending,(state, action)=>{
            console.log("Loading...")
        })
        .addCase(asyncTodos.fulfilled ,(state, action)=>{
            console.log("Todos:", action.payload)
        })
        .addCase(asyncTodos.rejected ,(state, action)=>{
            console.log("cancellation")
        })
    }
 })
 export default todosSlice.reducer
 export const { AddTodos } = todosSlice.actions