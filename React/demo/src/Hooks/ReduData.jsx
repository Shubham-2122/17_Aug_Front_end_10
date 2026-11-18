// useReducer : complex state manage


import React, { useReducer } from 'react'
import Header from '../Layout/Coman/Header'

const ininitalvalue = 0

export const reducer = (state,action)=>{
    switch (action) {
        case 'increment':
            return state += 1
            break;
        case 'decrement':
            return state -= 1
            break;
        case 'reset':
            return state = 0
            break;
    
        default:
            return ininitalvalue
            break;
    }
}

function ReduData() {

    const [count,dispatch] = useReducer(reducer,ininitalvalue)

    return (
    <div>
        <Header />
        <h1>Hello reducer hooks</h1>

        <h1>Counter : {count}</h1>
        <button onClick={()=>dispatch('increment')}>Increment</button>
        <button onClick={()=>dispatch('decrement')}>Decrement</button>
        <button onClick={()=>dispatch('Reset')}>Reset</button>
    </div>
  )
}

export default ReduData