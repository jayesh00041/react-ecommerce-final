import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Filters, Products } from '../components/ProductsPage'
import { Loader } from '../components'
import { useParams } from 'react-router-dom'

const ProductsPage = () => {
    const [products, setProducts] = useState(null)
    let { catagory } = useParams()
    let url = 'products/'

    switch (catagory) {
        case 'all':
            break;
        case "men's clothing":
            url += "category/men's clothing"
            break;
        case "women's clothing":
            url += "category/women's clothing"
            break;
        case "jewelery":
            url += "category/jewelery"
            break;
        default:
            break;
    }

    useEffect(() => {
        console.log(url);
        fetch('https://fakestoreapi.com/'+url)
            .then(res => res.json())
            .then(json => {
                let min = json[0].price, max = json[0].price;
                for (let item of json) {
                    min = Math.min(item.price, min);
                    max = Math.max(item.price, max);
                }
                min = Math.floor(min);
                max = Math.ceil(max);
                setProducts({ data: json, display_data: json, price: [min, max] })
            })
    }, [])






    const filter = {
        price: (low, high) => {
            let temp = products.data.filter((a) => (a.price < high && a.price > low))
            setProducts(prevState => ({ ...prevState, display_data: temp }));
        },
        sort: (e) => {
            let temp = products.data;
            switch (e.target.value) {
                case 'h_l':
                    temp.sort((a, b) => a.price < b.price ? 1 : -1);
                    setProducts(prevState => ({ ...prevState, display_data: temp }));
                    console.log(products)
                    break;

                case 'l_h':
                    temp.sort((a, b) => a.price > b.price ? 1 : -1);
                    setProducts(prevState => ({ ...prevState, display_data: temp }));
                    console.log(products)
                    break;

                case 'Rating':
                    temp.sort((a, b) => a.rating.rate < b.rating.rate ? 1 : -1);
                    setProducts(prevState => ({ ...prevState, display_data: temp }));
                    console.log(products)
                    break;
                default:
                    break;

            }
        },


    }


    return products === null ? <Loader /> : (
        <div className="container">
            <div className='row text-center mt-3'><h5 className='text-uppercase border py-2'>{catagory}</h5></div>
            <div className="row gx-10">
                <Filters products={products.display_data} price_range={products.price} filter={filter} />
                <Products products={products.display_data} />
            </div>
        </div>
    )
}

export default ProductsPage