import React, { useEffect, useState } from 'react'
import Aheader from '../Acoman/Aheader'
import ApageHeader from '../Acoman/ApageHeader'
import axios from 'axios'

function ServicesManage() {

    const [service, setservice] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        try {
            const res = await axios.get("http://localhost:3000/services")
            console.log(res.data)
            setservice(res.data)
        } catch (error) {
            console.log("Api Data not Found", error)
        }
    }

    return (
        <div>
            <Aheader />
            <ApageHeader title="Service Managements" />

            <div className="container">
                <table className="table my-5">
                    <thead>
                        <tr className='text-center'>
                            <th scope="col">#Id</th>
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            service && service.map((data) => {
                                // console.log(data)
                                return (
                                    <tr className='text-center' key={data.id} >
                                        <th scope="row">{data.id}</th>
                                        <td>
                                            <img src={data.img} style={{ width: "100px", height: "100px", borderRadius: "30px" }} alt="" />
                                        </td>
                                        <td>{data.name}</td>
                                        <td>
                                            <button className='btn btn-info'>View</button>
                                            <button className='btn btn-success mx-2'>Edit</button>
                                            <button className='btn btn-danger'>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>

            </div>

        </div>
    )
}

export default ServicesManage