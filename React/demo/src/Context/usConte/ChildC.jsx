import React, { useContext } from 'react'
import { data } from './ChildA'

function ChildC() {

    const {test,settest} = useContext(data)

    
  return (
    <div>
        <h1> C compo</h1>

        <h1>Counter : {test.count}</h1>
        <h1>Counter : {test.name}</h1>

        <button onClick={()=>settest({...test,count:test.count+1})}>Increment</button>
        <button onClick={()=>settest({...test,count:test.count-1})}>decrement</button>

        <h1></h1>
    </div>
  )
}

export default ChildC