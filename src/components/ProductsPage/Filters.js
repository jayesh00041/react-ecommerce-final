import React from 'react'
import Slider from '@mui/material/Slider';
import { FaCartPlus, FaRegStar, FaStar, FaStarHalf, FaStarHalfAlt } from 'react-icons/fa';



function valuetext(value) {
    return `$${value}`;
}

const Filters = ({ products, filter, price_range }) => {

    const [priceRange, setPriceRange] = React.useState(price_range);




    const handlePriceChange = (event, newValue) => {
        setPriceRange(newValue);
        filter.price(newValue[0], newValue[1])
    };

    return (
        <div className="col-lg-3 col-md-4 mb-6 mb-md-0">
            <div className="mt-4 pt-4">
                <div><h5 className="">Sort by</h5><br /></div>
                <div>
                    <select className="form-select" defaultValue='' aria-label="Default select example" onChange={filter.sort}>
                        <option selected={true} value="">Sort by: Featured</option>
                        <option value="l_h">Price: Low to High</option>
                        <option value="h_l"> Price: High to Low</option>
                        <option value="Rating"> Rating</option>
                    </select>
                </div>
            </div>

            <div className="py-4">
                <h5 className="mb-3">Price</h5>
                <div>
                    <div id="priceRange" className="mb-3 noUi-target noUi-ltr noUi-horizontal noUi-txt-dir-ltr"><div className="noUi-base"><div className="noUi-connects"><div className="noUi-connect" style={{ transform: "translate(14.6259%, 0px) scale(0.510204, 1)" }}></div></div><div className="noUi-origin" style={{ transform: "translate(-85.3741%, 0px)", zIndex: "5" }}><div className="noUi-handle noUi-handle-lower" data-handle="0" tabindex="0" role="slider" aria-orientation="horizontal" aria-valuemin="6.0" aria-valuemax="199.0" aria-valuenow="49.0" aria-valuetext="$49"><div className="noUi-touch-area"></div></div></div><div className="noUi-origin" style={{ transform: "translate(-34.3537%, 0px)", zIndex: "4" }}><div className="noUi-handle noUi-handle-upper" data-handle="1" tabindex="0" role="slider" aria-orientation="horizontal" aria-valuemin="49.0" aria-valuemax="300.0" aria-valuenow="199.0" aria-valuetext="$199"><div className="noUi-touch-area"></div></div></div></div></div>
                    <small className="text-muted">Price:</small>
                    <span id="priceRange-value" className="small">$49 - $199</span>
                    <Slider
                        getAriaLabel={() => 'Price range'}
                        value={priceRange}
                        onChange={handlePriceChange}
                        min={price_range[0]}
                        max={price_range[1]}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}

                    />
                </div>
            </div>

        </div>
    )
}

export default Filters