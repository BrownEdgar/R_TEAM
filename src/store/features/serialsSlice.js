import { DELETE_SERIAL_BY_ID } from "../actionsTypes";

export const initialSerialsValue = [
	{
		id: 1,
		title: "friends",
		ratings: "9.8",
		actors: ['Courteney Cox', 'Jennifer Aniston', 'Lisa Kudrow', 'Matt LeBlanc', 'Matthew Perry', 'David Schwimmer'],
		poster: "https://wallpapercave.com/wp/wp3256631.jpg"
	},
	{
		id: 2,
		title: "Prison Break",
		ratings: "9.7",
		actors: ['Wentworth Miller', 'Dominic Purcell', 'Robert Knepper', 'Sarah Wayne Callies', 'William Fichtner'],
		poster: "https://wallpapercave.com/wp/wp3988846.jpg"
	}
]

export function serialsReducer(state = [], action) {
	if (action.type === DELETE_SERIAL_BY_ID) {
		console.log(action)
		const newSeryials = state.filter(serial => serial.id !== action.payload);
		return newSeryials;
	}
	return state;
}
