import React from 'react'
import Header from '../Layout/Coman/Header'
import useApi from './useApi'

function UserDemo() {

    const {data} = useApi("https://fakestoreapi.com/products")

    console.log(data)
  return (
    <div>
        <Header />
        <h1>APi data show custom</h1>
    </div>
  )
}

export default UserDemo