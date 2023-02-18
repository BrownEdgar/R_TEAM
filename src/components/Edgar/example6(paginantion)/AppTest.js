import React, { useState, useEffect } from 'react'
import Pagination from './Pagination';
import List from './List';

export default function AppTest() {
	const [value, setValue] = useState([])
	const [currenPage, setCurrenPage] = useState(1);
	const [perPage] = useState(12)

	useEffect(() => {
		function generateArray(count) {
			const posts = new Array(count)
				.fill()
				.map((elem,index) => `Lorem ipsum dolor sit amet-${++index}.`)
			setValue(posts)
		}
		generateArray(200)
	}, [])

	const changePage = (page) => setCurrenPage(page)

	const lastPostIndex = currenPage * perPage// 1x10=10
	const firstPostIndex = lastPostIndex - perPage// 10-10=0 
	const currentPosts = value.slice(firstPostIndex, lastPostIndex)// slice(0, 10)
	console.log(currentPosts);
		
	return (
		<div>
			<List currentPosts={currentPosts}/>
			<Pagination perPage={perPage} length={value.length} changePage={(id) => changePage(id)} />
		</div>
	)
}
