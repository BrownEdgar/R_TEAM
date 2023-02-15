import React from 'react'

export default function Pageination({ totalPost, perPage, pageinate }) {
    const pageNumber = [];
    for (let i = 1; i <= Math.ceil( totalPost / perPage); i++) {
        pageNumber.push(i)
    }
  return (
    <nav>
        <ul className='Pageination'>
            {
                pageNumber.map(num => {
                    return <li kay={num} className='Pageination-list'>
                        <a 
                        className='Pageination-list-item'
                        href="!#"
                        onClick={() => pageinate(num)}
                        >{num}</a>
                    </li>
                })
            }
        </ul>
    </nav>
  )
}
