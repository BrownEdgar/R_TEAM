import React from 'react'
import PropTypes from 'prop-types'

export default function QuestionList({ faq, toggleShow }) {
  return (
    <div className={`faq ${faq.isShow ? "open" : ""}`}
        onClick={() => toggleShow(faq.id)}>
        <div className='faq-question'>
            {faq.description}
        </div>
        <div className='faq-answer'>
            {faq.answer}
        </div>
    </div>
  )
}

QuestionList.propsTypes = {
    faq: PropTypes.shape({
        id: PropTypes.number,
        description: PropTypes.string,
        answer: PropTypes.string,
        isShow: PropTypes.bool
    }),
    toggleShow: PropTypes.func.isRequired
}