import React from 'react'
import Header from '../Layout/Coman/Header'
import useCount from './useCount'

function TestData() {

    const {count,increment,decrement,reset} = useCount(2)

  return (
    <div>
        
        <Header />
        <h1>Custom data</h1>

        <h1>Count : {count}</h1>

        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>decrement</button>
    </div>
  )
}

export default TestData