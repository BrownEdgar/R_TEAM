import React, { useState } from 'react'
import FAQList from './components/FAQList'

import "./App.scss"

export default function App() {
  const [value,setValue] = useState({
    questions:[
      {
        id:1,
        description: "ինչ է Context-ը ?",
        answer: "Context-ը թույլ է տալիս տվյալներ փոխանցել component-ի ծառի միջով՝ առանց միջանկյալ մակարդակներում հենակետեր փոխանցելու:",
        isShow:false
      },
      {
        id:2,
        description: "Ինչ է React Router DOM-ը ?",
        answer: "React Router DOM-ը հանգույցային մոդուլ է, որը նախատեսված է վեբ հավելվածներում երթուղղելու համար: Այն թույլ է տալիս ինժեներներին ստեղծել երթուղիներ React Single Page Application-ի համար:",
        isShow:false
      },
      {
        id:3,
        description: "Ինչի համար է Redux thunk-ը ?",
        answer: "Redux Thunk-ը հանրաճանաչ միջին ծրագիր է React Redux-ի համար: Դուք կարող եք ստեղծել ծառայություններ, որոնք վերադարձնում են ֆունկցիաներ, հետևաբար կոչվում է Thunk: Thunk-ի ստեղծողները այս ֆունկցիան անվանում են (action creators): ",
        isShow:false
      },
      {
        id:4,
        description: "Redux-ում ինչպես են սահմանվում գործողությունները?",
        answer: "Redux-ում գործողություն սահմանելու սովորական եղանակն այն է, որ առանձին հայտարարվի գործողության տիպի հաստատուն և գործողության ստեղծման ֆունկցիա՝ այդ տեսակի գործողություններ ստեղծելու համար:",
        isShow:false
      },
      {
        id:5,
        description: "ինչ է React Fragment-ը ?",
        answer: "React Fragment-ը հարմար միջոց է մի քանի երեխա elemnet-ներ խմբավորելու համար՝ առանց դրանք DOM-ում ավելացնելու: Դուք պարզապես սահմանում եք պիտակ՝ օգտագործելով.<> or և ներբեռնեք բոլոր երեխա elemnet-ները, որոնք ցանկանում եք ներսում: Միակ տարբերությունն այն է կարճ տարբերակը <> չի ընդունում բանալիներ և ատրիբուտներ, մինչդեռ երկար տարբերակը ընդունում է։",
        isShow:false
      },
      {
        id:6,
        description: "Ինչու՞ fragment-ներն ավելի լավն են, քան container div-երը?",
        answer: "fragment-ները մի փոքր ավելի արագ են և ավելի քիչ հիշողություն են օգտագործում՝ չստեղծելով լրացուցիչ DOM հանգույց:",
        isShow:false
      },
      {
        id:7,
        description: "Ինչպե՞ս է React-ը տարբերվում JavaScript-ի մյուս գրադարաններից ?",
        answer: "React-ը տարբերվում է JavaScript-ի մյուս գրադարաններից մի քանի հիմնական առումներով: Ամենաէական տարբերություններից մեկը վիրտուալ DOM-ի օգտագործումն է, որը թույլ է տալիս React-ին թարմացնել միայն UI-ի այն մասերը, որոնք փոխվել են, այլ ոչ թե թարմացնել ամբողջ UI-ը: React-ը նաև շատ մոդուլային է և հեշտացնում է բազմակի օգտագործման բաղադրիչներ ստեղծելը:",
        isShow:false
      },
      {
        id:8,
        description: "երբ պետք է օգտագործեք refs react-ը",
        answer: "Ռեֆերատների մի քանի լավ կիրառումներ կան. Կառավարեք ֆոկուսը, տեքստի ընտրությունը կամ մեդիա նվագարկումը: Հրամայական անիմացիայի վարում: Ինտեգրում երրորդ կողմի DOM գրադարանների հետ:",
        isShow:false
      },
      {
        id:9,
        description: "Որքա՞ն հաճախ է React-ը թարմացնում useState-ը և ինչո՞ւ:",
        answer: "React-ն անմիջապես չի թարմացնում փոփոխությունները: useState-ը ուղղակիորեն փոփոխություններ չի կատարում state ​​օբյեկտում. փոխարենը թարմացումները տեղի են ունենում ասինխրոն",
        isShow:false
      },
      {
        id:10,
        description: "Ո՞րն է տարբերությունը element-ի և React component-ի միջև ?",
        answer: "React element-ը այն օբյեկտն է, որը մենք ցանկանում ենք տեսնել էկրանին, որը երբեք չի փոխվում: element-ները կարող են պարունակել այլ element-ներ:React component-ը class կամ ֆունկցիա է, որը վերադարձնում է element-ներ:",
        isShow:false
      },
    ]
  })

  const showHandler = (id) => {
    const temp = value.questions.map(elem => {
      if (elem.id === id) {
        elem.isShow = !elem.isShow
      }else{
        elem.isShow = false
      }
      return elem
    })
     setValue({questions: temp})
  }
  return (
	<div className='App'>
    <div className='faqs'>
        {value.questions.map(elem =>{
         return <FAQList key={elem.id} faq={elem} showHandler={showHandler}/>
        })}
    </div>
  </div>
  )
}

