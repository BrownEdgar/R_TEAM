import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DELETE_SERIAL_BY_ID } from './Gevorg/actionsTypes';
import "./Component.css"

export default function COMPONENT2() {
   const serials = useSelector(state => state.serials)
   const dispatch = useDispatch()
   const deleteById = (id) => {
        dispatch({type: DELETE_SERIAL_BY_ID, payload: id })
   }
  return (
    <div className='flex'>
        {
            serials.map(serial => {
                return (
                    <div className='flex_item' key={serial.id}>
                        <img src={serial.poster} alt={`poster_${serial.id}`}/>
                        <h3>{serial.title}</h3>
                        <p><strong>ratings: </strong> {serial.ratings}</p>
                        <ul>
                            {serial.actors.map((actor,index) => {
                                return <li key={index}>{index + 1} {actor}</li>
                            })}
                        </ul>
                        <button className='btn_delete'
                        onClick={() => deleteById(serial.id)}>DELETE SERIAL</button>
                    </div>
                )
            })
        }
    </div>
  )
}
