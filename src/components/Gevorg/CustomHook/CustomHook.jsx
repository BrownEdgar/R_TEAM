// 2․ Ստեղծել դասի օրինակով Custom Hook, որը իր մեջ կպահի օբյեկտներով լցված զանգված, 
//   - պետք է ունենալ նաև ֆունկցիա, որը այն սորտավորում է ըստ գնի Աժման և նվազման կարով
//   - պետք է նաև հնարավերություն լինի ջնջել այդ օբյեկտները ըստ իրենց id-ի
import React, { useState } from 'react'

export default function CustomHook(initianlState) {
  const [data, setData] = useState({
    state: initianlState,
    result: []
  })

  const sortByCount = () => {
    const sorted = data.state.sort((a, b) => {
      return a.price - b.price
    })
    setData({
      ...data,
      result: [sorted]
    })
  }
  return [data, {sortByCount}]
}

