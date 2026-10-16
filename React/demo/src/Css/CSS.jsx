import React from 'react'
import "./style.css";

function CSS() {

    let internlcss = {
        background:"blue",
        color:"white",
        padding:"40px"
    }

  return (
    <div>
        
        {/* 1) inline css  */}

        {/* inline css : as object use */}
        <h1 style={{background:"red",color:"white",padding:"20px",fontSize:"40px"}}>Hello inline css</h1>

        {/* 2) internal css : react not possible */}

        <h1 style={internlcss}>Hell internal css</h1>

        {/* 3) external css  */}

        {/* impoert css */}
        <h1 className='h1'>Hello data here</h1>
    </div>
  )
}

export default CSS