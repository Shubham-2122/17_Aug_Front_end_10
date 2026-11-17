import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function NotFound() {

    const redirect = useNavigate()

    const  backto=()=>{
        redirect("/")
        console.log("Hello data")
    }

  return (
    <div>
        <h1 className='p-5 text-light bg-danger'>404 Not Found Page</h1>
        <Link to="/" className='btn btn-info'>Back to Home</Link>
        <button onClick={backto} className='btn btn-success' >Back to Home 2</button>
    </div>
  )
}

export default NotFound