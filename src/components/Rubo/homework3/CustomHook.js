import React, { useState } from 'react'

export default function CustomHook(initialState) {
    const [data,setData] = useState({
        state:initialState,
    })
    const sortPrice = () => {
        let newData = data.state.filter(elem => elem.price)
        .sort((a,b)=> a.price - b.price)
        setData({
            ...data,
           state: newData
        })
    }
  return [data,{sortPrice}]
}
