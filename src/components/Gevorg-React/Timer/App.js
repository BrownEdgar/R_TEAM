import React, { useEffect, useState } from 'react'




export default function App() {
    const [time, setTime] = useState(new Date())
    useEffect(() => {
      const interval = setInterval(() => {
        setTime(new Date())
      }, 100);
    
      return () => clearInterval(interval)
    }, [])
    

  return (
    <div>
        <h1>{time.toLocaleTimeString()}</h1>

        
    </div>
  )
}
