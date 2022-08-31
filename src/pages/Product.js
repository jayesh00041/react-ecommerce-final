import React, { useEffect, useState } from 'react'
import { FeaturedProducts, Loader } from '../components'
import {useParams} from 'react-router-dom';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { add } from '../features/cart/cartSlice';



export default function Product() {
    const dispatch = useDispatch(state=>state.cart)
    const [product, setProduct] = useState(null)
    const [err, seterr] = useState(false)
    let {p_id} = useParams();
    console.log(p_id)
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${p_id}`)
            .then(res => res.json())
            .then(json => setProduct(json))
            .catch(err=>seterr(true))
    }, [])
    



    return err?<Noproduct />:product === null ? <Loader /> : (
        <>
            <div className="container mt-4">
                <div className="row gutter-2 gutter-md-4 justify-content-between">
                    {/* carousel  */}
                    <div className="col-lg-5 p-3 border-dark">
                        <img src={product.image} width="100%" className='product-image img-fluid border rounded p-4 mt-4' />
                    </div>

                    <div className="col-lg-7">
                        {/* description */}
                        <div className="row m-4">
                            <div className="col-12 p-4">
                                <span className="text-muted text-uppercase">{product.category}</span>
                                <h1 className='' style={{ fontSize: "1.5rem" }}>{product.title}</h1>
                                <span className="fs-18 ">${product.price}</span>
                            </div>
                        </div>


                        <div className="row gutter-2 m-4">
                            <div className="col-12 p-4">
                                <div className="form-group">
                                    <label>Product code</label>
                                    <small className="d-block text-dark">{product.id}</small>
                                </div>
                            </div>
                            <div className="col-12 p-4">
                                <button onClick={()=>dispatch(add(product))} className="btn btn-secondary btn-lg btn-block">Add to cart</button>
                            </div>
                        </div>





                        <div id="accordion" className='m-4 p-4'>
                            <div className="card mt-3 border-light">
                                <div className="card-header bg-light" id="headingOne">
                                    <h5 className="mb-0">
                                        <div data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Detail
                                        </div>
                                    </h5>
                                </div>

                                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                    <div className="card-body">
                                        {product.description}
                                    </div>
                                </div>
                            </div>
                            <div className="card mt-3 border-light">
                                <div className="card-header bg-light" id="headingTwo">
                                    <h5 className="mb-0">
                                        <div data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Shipping &amp; return
                                        </div>
                                    </h5>
                                </div>
                                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                    <div className="card-body">
                                        You may request returns for most items you buy from the sellers listed. However, you can only return items explicitly identified as "returnable" on the product detail page and/or our policy and within the ‘return window’ period. Please refer to the Amazon.in Returns policy. to know which categories are "non-returnable" and the specific return windows for categories eligible for return.

                                        Items are returnable if you've received them in a condition that is -
                                        <ul>
                                            <li>Physically damaged</li>
                                            <li>Has missing parts or accessories</li>
                                            <li>Defective</li>

                                        </ul>

                                        Different from its description on the product detail


                                    </div>
                                </div>
                            </div>
                            <div className="card mt-3 border-light">
                                <div className="card-header bg-light" id="headingThree">
                                    <h5 className="mb-0">
                                        <div data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            FAQ's
                                        </div>
                                    </h5>
                                </div>
                                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                    <div className="card-body">
                                        <strong>Q.1 ......</strong><br />
                                        ans. .........<br /><br />
                                        <strong>Q.2 ......</strong><br />
                                        ans. .........<br /><br />

                                    </div>
                                </div>
                            </div>
                        </div>




                    </div>

                </div>
            </div>
            <FeaturedProducts />
        </>
    )
}


const Noproduct=()=>{
    return (<div className='d-flex align-items-center justify-content-center' style={{height:'60vh'}}><h5>No Product Found</h5></div>)
}