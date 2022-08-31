import React from 'react'
import { FaCartPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux/';
import { add } from '../../features/cart/cartSlice';


const Products = ({ products }) => {
    const dispatch = useDispatch()

    return (
        <div className="col-lg-9 col-md-8">


            <div className="d-md-flex justify-content-between align-items-center py-4">
                <div>
                    <p className="mb-3 mb-md-0"> <span className="text-dark">{products.length} </span> Products found </p>
                </div>

            </div>
            <div className="row g-4 row-cols-xl-4 row-cols-lg-3 row-cols-2 row-cols-md-2 mt-1">
                {
                    products.map((item) => {
                        return (
                            <div className="col" key={item.id}>
                                <div className="card card-product">
                                    <div className="card-body">

                                        <div className="text-center position-relative ">
                                            {/* <div className=" position-absolute top-0 start-0">
                                                <span className="badge bg-danger">Sale</span>
                                            </div> */}
                                            <Link to={`/product/${item.id}`}>
                                                <img src={item.image} className='product-image mb-3 img-fluid' style={{ height: '10rem' }} alt={item.title} />
                                            </Link>

                                        </div>
                                        <div className="text-small mb-1">
                                            <small className='text-uppercase'>{item.catagory}</small>
                                        </div>
                                        <h2 className="fs-6">
                                            <Link to={`/product/${item.id}`}>
                                                {(item.title.length > 10) ? item.title.substring(0, 10) + '...' : item.title}
                                            </Link>
                                        </h2>
                                        <div>
                                            <small className="text-warning" style={{ color: 'yellow' }}>
                                                {/* {
                                                    rate(item.rating.rate)
                                                } */}

                                            </small>
                                            <span className="text-muted small">{item.rating.rate}({item.rating.count})</span>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center mt-3">
                                            <div>
                                                <span className="text-dark">${item.price}&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                                <span className="text-decoration-line-through text-muted">${Math.floor(item.price + (item.price * 40 / 100))}</span>
                                            </div>
                                            <div>
                                                <button className="btn btn-sm" onClick={() => dispatch(add(item))}>
                                                    <FaCartPlus style={{ color: '#fff' }} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }


            </div>

        </div>
    )

}

export default Products