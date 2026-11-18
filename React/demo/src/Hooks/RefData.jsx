// useRef : reffrence : direct real dom 
// re-reder stop
// refrenec element

import React, { useRef } from 'react'
import Header from '../Layout/Coman/Header'
import useCount from './useCount'

function RefData() {

    const refelement = useRef()

    const {count,increment,reset} = useCount(5)



    const getfocus = ()=>{
        refelement.current.focus()
    }

    const getstyle=()=>{
        refelement.current.style.background = "red"
        refelement.current.style.color ="white"
    }

  return (
    <div>
        <Header /> 

        <h1>Hello Ref element</h1>
        
        <input ref={refelement} type="text" placeholder='Enter your Name' />
        <button onClick={getfocus}>Click me</button>
        <button onClick={getstyle}>Style add</button>

        <h1>count : {count}</h1>
        <button onClick={increment}>Incremnet</button>
    </div>
  )
}

export default RefData