import React from 'react'
import PropTypes from 'prop-types'

export default function Component({post}) {
	return (
		<div>
			<h1>Post: {post.title}</h1>

		</div>
	)
}

Component.propTypes = {
	post: PropTypes.shape({
		id: PropTypes.number,
		count: PropTypes.string,
		skilss: PropTypes.arrayOf(PropTypes.string),
		show: PropTypes.func,
		gender: PropTypes.oneOf(['male', 'female']),
		address: PropTypes.shape({
			city: PropTypes.string,
			street: PropTypes.string,
			house: PropTypes.number
		}),
		deleted: PropTypes.oneOfType([null, PropTypes.string]).isRequired
	})
}



