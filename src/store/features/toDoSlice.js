import { createSlice } from "@reduxjs/toolkit";



const toDoSlice = createSlice({
	name: "toDo",
	initialState: {
		data: [],
		hasError: false
	},
	reducers:{
		addToDo: (state, action) => {
			 console.log(state);
			
			const isExist = state.data.find(elem => elem.text === action.payload)
			if (!isExist) {
				state.data.push({
					id: new Date().toISOString(),
					text: action.payload,
					complited: false
				})
			}else{
				state.hasError = true;
			}
		},
		toggleError: (state) => {
			state.hasError = !state.hasError
		}
	}
})


export default toDoSlice.reducer;
export const { addToDo, toggleError } = toDoSlice.actions;
