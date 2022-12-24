import React, { useState } from 'react'

export default function CustomHook(initialState) {
	const [data, setData] = useState({
		state: initialState,
		result: []
	})

	const maxPopulate = () => { 
		let city = null;
		let population = 0
		data.state.forEach(element => {
			if (parseInt(element.population) > population ) {
				population = element.population
				city = element
			}
		});
		setData({
			...data,
			result: [city]
		})
	}

	const summaryPop = () => {
		let summ=0
		data.state.forEach(elem =>{
			summ+=parseFloat(elem.population)
		})
		setData({
			...data,
			result: [summ]
		})
	}

	const updatePop = () => {
		const newData = data.state.map(elem => {
			const p = (parseFloat(elem.population) + 1) + "M"
			elem.population = p
			return elem
		})

		setData({
			...data,
			state: newData,
		})
		summaryPop()
	}

	return [data, { maxPopulate, summaryPop, updatePop }, setData]
}
