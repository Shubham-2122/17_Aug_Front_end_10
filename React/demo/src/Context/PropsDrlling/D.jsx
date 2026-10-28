import React from 'react'

function D({name,setname}) {
  return (
    <div>
        <h1>Hello D Compo</h1>

        <h1>D : {name}</h1>

        <button onClick={()=>setname("sujal")}>Chnage name</button>
    </div>
  )
}

export default D