import axios from 'axios';
import classNames from 'classnames';
import React, { useState, useEffect } from 'react'
import { getData } from './helpers/getApi';


const btnArr = ["one", "two", "three", "four", "five"];

export default function Home() {
	const [value, setValue] = useState(3);
	const [users, setUsers] = useState([]);

	useEffect(() => {
			async function x() {
				const response = await getData("users", 2);
				setUsers(response)
				console.log(response)
			}
		x()
	}, [])
	


	const handleClick = (index) => {
		setValue(index)
	}
	return (
		<div>
			<h1>Home page</h1>
			<div>
				{btnArr.map((btnName, index) => {
					return <button
						key={index}
						className={classNames({ active: value === index })}
						onClick={() => handleClick(index)}
					>{btnName}</button>
				})}
			</div>
		</div>
	)
}
