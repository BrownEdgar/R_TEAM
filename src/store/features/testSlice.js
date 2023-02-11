import { createSlice, createSelector } from "@reduxjs/toolkit";


export function allData(state) {
	return []
}

export function filteredData(state) {
	return state.test.data.filter(elem => elem.includes("m"))
}


export const testSlice = createSlice(
	{
		name: "test",
		initialState: {
			data: ["karen", "levon", "armen", "anahit", "lusine", 'mirna', "maro", "davit"],
			searchname: ""
		},
		reducers: {
				changeName(state, action) {
		
					return  {
						...state,
						searchname: action.payload.name
					}
				}
		}
	}
)

export default testSlice.reducer;
export const { changeName } = testSlice.actions