import React from 'react'
import PropTypes from 'prop-types'

export default function FAQList({ faq, toggleShow }) {
	return (
		<div 
			className={`faq ${faq.isSհow ? "open" : ""}`}
			onClick={() => toggleShow(faq.id)}
		>
			<div className='faq-question'>
				{faq.description}
			</div>
			<div className='faq-answer'>
				{faq.answer}
			</div>
		</div>
	)
}

FAQList.propsTypes = {
	faq: PropTypes.shape({
		id: PropTypes.number,
		description: PropTypes.string,
		answer: PropTypes.string,
		isSհow: PropTypes.bool,
	}),
	toggleShow: PropTypes.func.isRequired,
}