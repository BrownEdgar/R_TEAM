import React from 'react'

import './FAQList.scss'

export default function FAQList({faq,showHandler}) {
  return (
    <div className={`faq${faq.isShow ? "-show" : ""}`} onClick={() => showHandler(faq.id)}>
        <div className='faq-description'>
            {faq.description}
        </div>
        <div className='faq-answer'>
            {faq.answer}
        </div>
    </div>
  )
}
