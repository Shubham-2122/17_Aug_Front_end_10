// custom hooks : use keyword 

import React, { useState } from 'react'

function useCount(data) {
    const [count,setcount] = useState(data)

    const increment =()=>{
        setcount(count+1)
    }
    const decrement =()=>{
        setcount(count-1)
    }
    const reset =()=>{
        setcount(0)
    }

    return {count,increment,decrement,reset}
}

export default useCount