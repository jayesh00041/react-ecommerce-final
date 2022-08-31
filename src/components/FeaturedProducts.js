import React, { useState, useEffect } from 'react'
import { Loader } from './index'
import {Link} from 'react-router-dom'

const FeaturedProducts = () => {
    const [products, setProducts] = useState(null)
    const [err, setErr] = useState(false)
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json))
            .catch(err=>{
                setErr(true)
                console.log(err);
            })
    }, [])

    return (err===false)?(products === null) ? <Loader /> : (
        <div className='container'>
            <div className='text-center'>
                <h1 className="display-6">Featured Products</h1>
                <span className='border-bottom'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            </div>




            <marquee>
                <div className='featured-products py-4'>
                    {
                        products.map((product, i) => {
                            return (<div className='product-card' key={i}>
                                <div className="card text-center">
                                    <div className="card-body border-light">
                                        <p className="card-text text-end">₹{product.price}</p>
                                        <Link to={`/product/${product.id}`}>
                                            <img src={product.image} style={{ height: "150px", width: 'auto' }} className='img-fluid' />
                                            <h5>{(product.title.length > 10) ? product.title.substring(0, 10) + '...' : product.title}</h5>
                                        </Link>
                                        <div className="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                                            <input type="checkbox" className="btn-check" id="btncheck1" />
                                            <label className="btn btn-outline-secondary" for="btncheck1">Add to Cart</label>

                                            <input type="checkbox" className="btn-check" id="btncheck2" />
                                            <label className="btn btn-outline-secondary" for="btncheck2">Buy Now</label>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        })
                    }
                </div>
            </marquee>

        </div>
    ):<h5>Error Occured</h5>
}

export default FeaturedProducts