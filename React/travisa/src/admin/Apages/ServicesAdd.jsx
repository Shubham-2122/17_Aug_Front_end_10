import React, { useState } from 'react'
import Aheader from '../Acoman/Aheader'
import ApageHeader from '../Acoman/ApageHeader'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function ServicesAdd() {

    const redirect = useNavigate()

    const [service, setservice] = useState({
        id: "",
        name: "",
        img: "",
        desc: ""
    })

    const getchange = (e) => {
        setservice({
            ...service,
            id: new Date().getTime().toString(),
            [e.target.name]: e.target.value
        })
    }

    const getsubmit = async (e) => {
        e.preventDefault()

        if (service.name == "" || service.img == "" || service.desc == "") {
            console.log("Pls data feild first")
            return false
        }

        try {
            const res = await axios.post("http://localhost:3000/services", service)
            console.log(res.data)
            console.log("Service Added")
            setservice({
                id: "",
                name: "",
                img: "",
                desc: ""
            })
            redirect("/servicemange")
        } catch (error) {
            console.log("Api Data not found", error)
        }
    }

    return (
        <div>
            <Aheader />
            <ApageHeader title="Service Add form" name="Service Add" />
            <div className="container my-5">
                <div className="row">
                    <div className="col-12 wow fadeInRight" data-wow-delay="0.3">

                        <h1 className="display-5 mb-4">Service Add</h1>

                        <form onSubmit={getsubmit} >
                            <div className="row g-4">
                                <div className="col-lg-12">
                                    <div className="form-floating">
                                        <input type="text" value={service.name} name='name' onChange={getchange} className="form-control" id="name" placeholder="Service Name" />
                                        <label htmlFor="name">Service Name</label>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-floating">
                                        <input type="url" value={service.img} name='img' onChange={getchange} className="form-control" id="img" placeholder="Your Image url" />
                                        <label htmlFor="img">Your Image url</label>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="form-floating">
                                        <textarea className="form-control" name='desc' onChange={getchange} value={service.desc} placeholder="Service Descripation" id="desc" style={{ height: 160 }} defaultValue={""} />
                                        <label htmlFor="desc">Service Descripation</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary w-100 py-3">Service Add</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesAdd