import React, { useEffect, useState } from 'react'

function UserData() {

    const [user, setuser] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = () => {
        fetch("https://jsonplaceholder.typicode.com/users", {
            method: "GET"
        })
            .then((res) => {
                return res.json()
            })
            .then((res) => {
                // console.log(res)
                setuser(res)
            })
    }

    return (
        <div>
            <table className="table">
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

export default UserData