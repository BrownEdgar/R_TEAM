import React from 'react'
import './Pagination.css';

export default function Pagination({perPage,length, changePage}) {

    const pageNumber = [];
    for(let i = 0;i < Math.ceil(length / perPage); i++){
        pageNumber.push(i + 1)
    }

  return (
    <ul className='pagination'>
        {pageNumber.map((elem) => {
            return <li key={elem} className="page-item">
                <button 
                href='!#' 
                className='page-link'
                onClick={() => changePage(elem)}
                >{elem}</button>
            </li>
        })}
    </ul>
  )
}
