import React, { useState } from 'react'
import QuestionList from './QuestionList'

import "./App.css"

export default function App() {
    const [data, setData] = useState({
        question:[
            {
                id: 1,
                description: "Ինչի՞ համար է նախատեսված Provider-ը և ինչ կարևոր արգումենտ է ստանում",
                answer: "Այն հասանելի է դարձնում store-ը ցանկացած կոմպոնենտին,  արգումենտ է ստանում store-ը ",
                isShow: false
            },
            {
                id: 2,
                description: "Որտե՞ղ չի կարելի գրել Hook-եր (չի աշխատի)",
                answer: "React class component-ում և փոքրատառով սկսվող ֆունկցիաներում ",
                isShow: false
            },
            {
                id: 3,
                description: "Ո՞րն է useMemo-ի և useCallback-ի տարբերությունը",
                answer: "useMemo-ն վերադարձնում է արժեք, իսկ useCallback-ը ֆունկցիա",
                isShow: false
            },
            {
                id: 4,
                description: "Ինչ էլեմենտներ ունի Layout component-ը",
                answer: "<Outlet> և <Link>",
                isShow: false
            }
        ]
    })

    const toggleShow = (id) => {
        const temp = data.question.map(elem => {
            if(elem.id === id){
                elem.isShow = !elem.isShow
            }else {
                elem.isShow = false
            }
            return elem
        })
        setData({question : temp})
    }
  return (
    <div className='App'>
        <div className='faqs'>
            {
                data.question.map(elem => {
                  return  <QuestionList key={elem.id} faq={elem} toggleShow={toggleShow}/>
                })
            }
        </div>
    </div>
  )
}
