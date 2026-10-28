import axios from 'axios'
import React, { useEffect, useState } from 'react'

function ProductCard() {

    const [product, setproduct] = useState([])

    useEffect(() => {
        fetchproduct()
    }, [])

    const fetchproduct = async () => {
        try {
            const res = await axios.get("https://fakestoreapi.com/products")
            console.log(res.data)
            setproduct(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    {
                        product && product.map((data) => {
                            return (
                                <div className="col-md-4" key={data.id}>
                                    <div className="card" style={{ width: '18rem' }}>
                                        <img src={data.image} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                               <h5 className="card-title">{data.id}</h5>
                                            <h5 className="card-title">{data.title}</h5>
                                            <h5 className="card-title">{data.price} $</h5>
                                            <p className="card-text">{data.description.slice(0,100)}</p>
                                            <button className="btn btn-primary">Go somewhere</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductCard