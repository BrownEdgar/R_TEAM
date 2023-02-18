import React, { useState } from 'react'
import FAQList from './FAQList'
import "./style.css";

export default function Test() {
    const [value, setValue] = useState({
        questions: [
            {
                id: 1,
                description: `КАКОВЫ НЕКОТОРЫЕ ОГРАНИЧЕНИЯ REACT?`,
                answer: `React JS - это библиотека JavaScript, а не полноценный фреймворк, 
                  что означает, что для какого-то проекта ее может быть недостаточно.
                  JSX добавляет новое измерение кодирования для разработчиков, 
                  которые раньше не использовали его (хотя у него есть легкая кривая обучения из-за его сходства с HTML)`,
                isShow: false  
            },
            {
                id: 2,
                description: `Թվարկեք React-ի կարևոր հատկությունները?`,
                answer: `Օգտագործման հեշտությունը
                Արագ զարգացում
                Կոմպոնենտների օգտագործելը
                jsx
                վիրտուալ DOM
                Բարձր կատարողականություն
                Տվյալների միակողմանի կապում(Односторонняя привязка данных)`,
                isShow: false  
            },
            {
                id: 3,
                description: `Ինչ տարբերություն կա էլեմենտի և կոմպոնենտի մինչև`,
                answer: `Элемент React-ը Դա պարզ և անփոփոխ օբյեկտ է, որը ստեղծվել է DOM-ի հանգույցի հիման վրա:
                Անփոփոխ լինելը նշանակում է, որ այն չի կարող փոխվել այն բանից հետո, երբ այն ստեղծվել է, քանի որ այն ցուցադրվում է DOM-ում
                С другой стороны, компонент React является изменчивым и после рендеринга создает вывод JSX.`,
                isShow: false  
            },
            {
                id: 4,
                description: `Что такое реквизит в React?`,
                answer: `Реквизиты в React — это просто способ сказать свойства, и под этим вы имеете в виду свойства компонента.
                Реквизиты используются для передачи данных от родительского компонента к одному или нескольким дочерним компонентам,
                и они доступны только для чтения дочернему компоненту.`,
                isShow: false
            },
            {
                id: 5,
                description: `Ինչպես եք թարմացնում React-ը?`,
                answer: `Դուք թարմացնում եք կոմպոնենտի վիճակը կանչելով this.setState() մեթոդը`,
                isShow: false  
            },
            {
                id: 6,
                description: ` Объясните строгий режим React?`,
                answer: `Строгий режим React — это инструмент, который помогает разработчику обнаруживать потенциальные проблемы в приложении,
                активируя более глубокие проверки компонентов и выделяя больше предупреждений. Строгий режим доступен только в режиме разработки.`,
                isShow: false  
            },
            {
                id: 7,
                description: ` Определите Поток в React?`,
                answer: `Flux — Flux-ը հավելվածում տվյալների հոսքը կառավարելու միակողմանի համակարգ է:
                Միակողմանի նշանակում է, որ տվյալները կարող են փոխանցվել միայն ծնողներից երեխայի բաղադրիչներին:
                Flux-ը կարող է նաև ներառել տվյալների բազմաթիվ պահեստներ յուրաքանչյուր հավելվածի համար:`,
                isShow: false  
            },
            {
                id: 8,
                description: `Что такое фрагменты?`,
                answer: `Фрагмент React — это удобный способ сгруппировать несколько дочерних элементов в компоненте, не добавляя их в DOM.
                Вы просто определяете тег, используя:  <> или  загрузите все дочерние элементы, которые вы хотите внутри. 
                Единственное отличие состоит в том, что сокращённая версия <> не принимает ключи и атрибуты, а длинная — принимает.`,
                isShow: false  
            },
            {
                id: 9,
                description: `Что такое Webpack?`,
                answer: `Webpack — это система связывания модулей, используемая для объединения и минимизации файлов JavaScript и CSS.
                Он построен на Node.js и полезен при работе с большим количеством файлов или ресурсов, не связанных с кодом, таких как изображения и шрифты.`,
                isShow: false  
            },
            {
                id: 10,
                description: `Каковы основные преимущества использования React Router?`,
                answer: `Он создает разные URL-адреса для вашего приложения и предоставляет значения window.location и объект истории.`,
                isShow: false  
            },
            {
                id: 11,
                description: `Объясните термин Граница ошибки в React?`,
                answer: `Граница ошибки относится к компоненту React, 
                который перехватывает ошибки JavaScript от своих дочерних компонентов,
                регистрирует ошибки и отображает резервный пользовательский интерфейс вместо узлов, в которых произошел сбой.
                Границы ошибок были введены в React 16.`,
                isShow: false  
            },
        ]
    })

    const toggleShow = (id) => {
        const temp = value.questions.map((elem,index) => {
            if(elem.id === id){
                elem.isShow = !elem.isShow
            }else{
                elem.isShow = false
            }
            return elem;
        })
        setValue({ questions: temp })
    }

  return (
    <div className='App'>
        <div className='faqs'>
         {value.questions.map((faq) => {
           return <FAQList 
              key={faq.id} 
              faq={faq} 
              toggleShow={toggleShow}/>
        })}
        </div>
    </div>
  )
}
