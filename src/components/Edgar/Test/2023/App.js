import React, { Component } from 'react'

export default class App extends Component {
	constructor() {
		super()
		this.state = {
			name: "Class component",
			count: 1,
			data: []
		}
	}

	componentWillUnmount() {
		console.log("the end")
	}


	handleClick = () => {  
		this.setState({...this.state, count: 2})
	}
	render() {
		const { name,count} = this.state

		return (
			<div>
				<div><h1>{name}</h1></div>
				<div><h1>{count}</h1></div>
				<button onClick={this.handleClick}>Add</button>
			</div>
		)
	}
}
