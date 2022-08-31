import React from 'react'

const TopSection = () => {
    return (
        <div className='container top-section'>
            <div className='row'>
                <div className='col-sm-5 col-12'>
                    <div className="p-3 border-light top-item">
                        <div className='row'>
                            <div className="col-6"><span className='badge bg-secondary'>New</span></div>
                            <div className="col-6 text-end">$50.00</div>
                        </div>
                        <div><img src='https://template.hasthemes.com/hurst-v1/hurst/img/banner/3.jpg' className="img-fluid" /></div>
                        <div className='row'>
                            <div className="col-6"><h5>Product-name</h5></div>
                            <div className="col-6 text-end"><button className='btn btn-secondary'>Buy now</button></div>
                        </div>
                    </div>
                </div>
                <div className='border-light col-sm-7 col-12'>
                    <div className="p-3 top-item" style={{ height: '22rem', background: "url('https://template.hasthemes.com/hurst-v1/hurst/img/banner/4.jpg')" }}>
                        <div className='row'></div>
                        <div className="d-flex align-items-center justify-content-end">
                            <h4 className="display-4">Furniture...</h4>
                        </div>
                        <div className='row'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopSection