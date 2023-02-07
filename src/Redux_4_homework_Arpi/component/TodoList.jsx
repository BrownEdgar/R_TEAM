import React from 'react'
import { connect } from 'react-redux'

 function TodoList({ target, data}) {
	 const renderUser = (data) => {
		console.log("datasssssssssssssssssssss:",data)
		return data.map(elem => {
			return <p key ={elem.id}>{elem.name}</p>
		})
	}
	const renderData = () => {
		switch (target) {
			case "users": return renderUser(data);
			default: return renderUser(data)
		}
	}
	return (
		<div>
			<h1>List</h1>
			{renderData()}
		</div>
	)
}



const mapStateToProps = (state, {options}) => {
	const { count, target } = options;
	console.log({ count, target })
	const data = state[target].slice(0,count);
	console.log(data)
	return {
		data
	}
}


export default connect(mapStateToProps)(TodoList)

