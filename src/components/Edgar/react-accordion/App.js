import React, { useState } from 'react'
import FAQList from './FAQList';
import "./style.css";
export default function Test() {
	const [value, setValue] = useState({
		questions:[
			{
				id:1,
				description: `ինչի՞ համար է նախատեսված createAsyncThunk ֆունկցիան Redux-ում`,
				answer: "createAsyncThunk-ը նախատեսված է async հարցումներ կատարելու համար։Ընդունում է 2 պարամետր",
				isSհow: false,
			},
			{
				id:2,
				description: `Ինչի՞ համար է նախատեսվծ React key-ը`,
				answer: "Օգնում է React-ին հասկանալ թե, որ էլեմենտներն են փոխվել, ջնջվել, կամ թարմացել,որպեսզի ավելի օպտիմալ կազմակերպվի էջի թարմացումը",
				isSհow: false,
			},
			{
				id:3,
				description: `Ի՞նչ է HOC-ը `,
				answer: "HOC high order component, որոնք թույլ են տալիս հեշտ վերաօգտագործել նույն տվյալները մի քանի կոմպոնենտներում։Ստանում են Կոմպոնենտ և վերադարձնում են նոր կոմպոնենտ, արդեն պետք եղած տվյալներով",
				isSհow: false,
			},
			{
				id: 4,
				description: `Որն է git և github-ի տարբերությունը`,
				answer: "",
				isSհow: false,
			}
		]
	})

	const toggleShow = (id) => { 
		const temp = value.questions.map((elem,indx) => {
			if (elem.id === id) {
				elem.isSհow = !elem.isSհow; 
			}else{
				elem.isSհow = false;
			}
			return elem;
		})
		setValue({ questions: temp})
	}
	return (
		<div className='App'>
			<div className='faqs'>
				{value.questions.map((faq) => {
					return <FAQList
						key={faq.id}
						faq={faq}
						toggleShow={toggleShow}
					/>
				})}
				</div>
		</div>
	)
}
