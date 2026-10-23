import React, { useState } from 'react'
import ImageData from './ImageData'

function FunObjec() {

    const [data, setdata] = useState({
        name: "jay",
        count: 0,
        isImage: true
    })

    console.log(data)

    return (
        <div>FunObjec

            <h1>Name : {data.name}</h1>

            <button onClick={() => setdata({ ...data, name: "shubham" })}>change name</button>
            <button onClick={() => setdata({ ...data, name: "pravin" })}>change name</button>

            <h1>counter : {data.count}</h1>

            <button onClick={() => setdata({ ...data, count: data.count + 1 })}>Increment</button>
            <button onClick={() => setdata({ ...data, count: data.count - 1 })}>dencrement</button>
            <button onClick={() => setdata({ ...data, count: 0 })}>Reset</button>

            <hr />
            <br />

            <button onClick={() => setdata({ ...data, isImage: false })}>Hide</button>
            <button onClick={() => setdata({ ...data, isImage: true })}>Show</button>
            <button onClick={() => setdata({ ...data, isImage: !data.isImage })}>Toggle</button>

            {
                data.isImage ? <ImageData /> : false
            }

        </div>
    )
}

export default FunObjec