import React from 'react'
import { useState,useEffect } from 'react'

const Timer = () => {
  const [count,setCount]=useState(0)
  useEffect(()=>{
    setTimeout(()=>{
      setCount(count+1)
    },1000)
  },[count])
  return (
    <div>
      <p>You've been on this page for {count} seconds.</p>
    </div>
  )
}

export default Timer
