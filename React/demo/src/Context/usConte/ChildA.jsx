import React, { createContext, useState } from 'react'
import ChildD from './ChildD'
import ChildB from './ChildB'
import ChildC from './ChildC'

export const data = createContext()

function ChildA() {

    const [name,setname] = useState("ketan")
    const [test,settest] = useState({
        count : 0,
        name:"data"
    })

  return (
    <div>
        <h1> A compo</h1>

        <h1>A : {name}</h1>

        {/* 1) create context : token */}
        <data.Provider value={{name,setname,test,settest}}>
            <ChildB />
            <ChildC />
            <ChildD />
        </data.Provider>
    </div>
  )
}

export default ChildA