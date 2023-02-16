import { createSlice } from "@reduxjs/toolkit";



const toDoSlice = createSlice({
	name: "toDo",
	initialState: {
		data: [],
		hasError: false
	},
	reducers:{
		addToDo: (state, action) => {
			const isExist = state.data.find(elem => elem.text === action.payload)
			if (!isExist) {
				state.data.push({
					id: window.crypto.randomUUID(),
					text: action.payload,
					complited: false
				})
			}else{
				state.hasError = true;
			}
		},
		toggleError: (state) => {
			state.hasError = !state.hasError
		},
		deleteToDo: (state, action) => {
<<<<<<< HEAD
			state.data =  state.data.filter(elem => elem.id !== action.payload)
=======
			console.log(action);
			state.data = state.data.filter(elem => elem.id !== action.payload.id)
>>>>>>> 4cf56996a29e78534ee8609d6bf18153d46d869f
		}
	}
})


export default toDoSlice.reducer;
export const { addToDo, toggleError, deleteToDo } = toDoSlice.actions;
