import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { changeName, filteredData, unsafeSelector } from '../store/features/testSlice';

export default function ReselectEx() {
	const data = useSelector(state => state.test.data.filter(elem => elem.includes("m")))


	console.log(data)
	const dispatch = useDispatch()

	const handleSubmit = (e) => { 
		e.preventDefault()
	}


	const handleChange = (e) => {
		
		 const {value} = e.target;
		dispatch(changeName({ name: value }))
	}

	
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input type="text" onChange={handleChange}/>
			</form>
		</div>
	)
}
