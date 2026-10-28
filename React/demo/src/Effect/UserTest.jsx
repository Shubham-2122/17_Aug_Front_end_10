import axios from 'axios'
import React, { useEffect, useState } from 'react'

function UserTest() {

    const [user,setuser] = useState([])

    useEffect(()=>{
        fetchdata()
    },[])

    const fetchdata=async()=>{
        try {
            const res = await axios.get("https://jsonplaceholder.typicode.com/users")
            console.log(res.data)
            setuser(res.data)
        } catch (error) {
            console.log("api not found",error)
        }
    }

  return (
    <div>UserTest

         <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">#id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">City</th>
                        <th scope="col">Company</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user && user.map((data) => {
                            // console.log(data)
                            return (
                            <tr key={data.id}>
                                <th scope="row">{data.id}</th>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td>{data.address.city}</td>
                                <td>{data.company.name}</td>
                            </tr>
                            )
                        })
                    }

                </tbody>
            </table>

    </div>
  )
}

export default UserTest