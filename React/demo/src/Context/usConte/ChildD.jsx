import React, { useContext } from 'react'
import { data } from './ChildA'

function ChildD() {
  
    const {name,setname} = useContext(data)


    return (
    <div>
        <h1> D compo</h1>

        <h1>D Name : {name}</h1>

        <button onClick={()=>setname("jay")}>Change name</button>
        
    </div>
  )
}

export default ChildD