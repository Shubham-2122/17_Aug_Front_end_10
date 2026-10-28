// useEffect : function side effect 
// API call 
// first logic , optional 

import React, { useEffect, useState } from 'react'

function Effectdata() {

    // 1) empaty data
    // useEffect(()=>{
    //     console.log("Hello outside")
    //     return(()=>{
    //         console.log("Hello inside")
    //     })
    // })


    // blank array
    // useEffect(()=>{
    //     console.log("Hello outside")
    //     return(()=>{
    //         console.log("Hello inside")
    //     })
    // },[])

    const [name,setname] = useState("shubham")

     useEffect(()=>{
        console.log("Hello outside")
        return(()=>{
            console.log("Hello inside")
        })
    },[name])

  return (
    <div>Effectdata

        <h1>Name : {name}</h1>

        <button onClick={()=>setname("sujal")}>Change name</button>
    </div>
  )
}

export default Effectdata