import React from 'react'
import Text from './Text';

import "./App.scss"

export default function App() {

  return (
    <div className='List'>
        <Text as={"p"} clName={"box"} theme={"dark"}>
          My Tag
        </Text>
    </div>
  )
}
