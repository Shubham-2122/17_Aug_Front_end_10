// jsx : javascript syatax xml 
// js vs jsx : 0.1 sec 
// jsx : html read suggestion 
// jsx : html js {}
// jsx :  className
// jsx : <></>

import React from 'react'

function Hello() {

    // console.log("hello")
    let name = "ketan"
    // console.log(name)

    let person = {
        name :"het",
        age : 23,
        course :"Front-end"
    }

    console.log(person)

    let htmldata = <ul>
        <li>zxcxzc</li>
        <li>czxd</li>
        <li>dsfds</li>
        <li>dsfds</li>
    </ul>

  return (
    <>
        
        <h1 className=''>Name : {name}</h1>

        <h1>Name : {person.name}</h1>

        {htmldata}

        <h1>Sum : {10+26}</h1>

    </>
  )
}

export default Hello