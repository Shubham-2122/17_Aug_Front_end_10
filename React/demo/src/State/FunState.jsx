// state : same chnage 
// Hook : useState
// import useState reat
// const [defined,setdefined] = useState()
// 

import React, { useState } from 'react'
import ImageData from './ImageData'

function FunState() {

    const [name,setname] = useState("ketan") // string 
    const [count,setcount] = useState(1)
    const [isImage,setisImage] =useState(true)


    const increment2=()=>{
        setcount(count+2)
    }    

  return (
    <div>FunState

    <h1>Name : {name}</h1>
    <button onClick={()=>setname("het")}>Chanage Names</button>
    <button onClick={()=>setname("sujal")}>Chanage Names</button>

    <h1>Counter : {count}</h1>
    <button onClick={()=>setcount(count+1)}>Increment</button>
    <button onClick={increment2}>Increment by 2</button>
    <button onClick={()=>setcount(count-1)}>Decrement</button>
    <button onClick={()=>setcount(0)}>Reset</button>

    <hr /> 
    <br />

    <button onClick={()=>setisImage(false)}>Hide</button>
     <button onClick={()=>setisImage(true)}>Show</button>
      <button onClick={()=>setisImage(!isImage)}>Toggle</button>

    {
        isImage ? <ImageData /> : false
    }

    </div>
  )
}

export default FunState