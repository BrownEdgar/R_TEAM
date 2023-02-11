import React from 'react'
import { connect } from 'react-redux'

 function TodoList({ target, data}) {
	 const renderUser = (data) => {
	
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
	const data = state[target].slice(0,count);

	return {
		data
	}
}


export default connect(mapStateToProps)(TodoList)

