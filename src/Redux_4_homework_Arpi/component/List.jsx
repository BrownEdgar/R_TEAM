import React from 'react'
import { connect } from 'react-redux'

 function List({ options,data }) {
	
	return (
		<div>
			<pre>
				{JSON.stringify(data, null, 1)}
			</pre>
		</div>
	)
}


const mapStateToProps = (state, { options }) => {
	const { entities } = options
	const data = state[entities]
	return {
		data
	}
}

export default connect(mapStateToProps)(List)

