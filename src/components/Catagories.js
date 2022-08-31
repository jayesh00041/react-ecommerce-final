import React from 'react'
import { Paper } from '@mui/material'
import { Link } from 'react-router-dom'

const catagories = [
    {
        name: "electronics",
        description: 'Dreams about the future are always filled with gadgets.',
        image: "https://cdn.pixabay.com/photo/2016/06/28/05/10/laptop-1483974__340.jpg",
        url: "https://fakestoreapi.com/products/category/electronics"
    }, {
        name: "jewelery",
        description: 'Jewelry is something that has to do with emotion.',
        image: "https://www.krishnajewellers.com/blog/wp-content/uploads/2021/12/Buy-Gold-Choker-Designs.jpg",
        url: "https://fakestoreapi.com/products/category/jewelery"
    }, {
        name: "men's clothing",
        description: 'Fashion is more about feel.',
        image: "https://media.istockphoto.com/photos/stylish-business-clothing-for-businessman-picture-id504742864?k=20&m=504742864&s=612x612&w=0&h=nuy8uRAuB6xVTfuXeTOd8wFSBWwNNGZ0nK1qViA-Nv0=",
        url: "https://fakestoreapi.com/products/category/men's clothing"
    }, {
        name: "women's clothing",
        description: 'The joy of dressing is an art.',
        image: "https://www.remelifestyle.in/wp-content/uploads/2019/12/womenswear.jpg",
        url: "https://fakestoreapi.com/products/category/women's clothing"
    }
]


const Catagories = () => {
    return (
        <div className='container py-4'>
           {
                catagories.map((catagory,index)=>{
                    return ((index%2===0)?<LeftCatagory catagory_detail={catagory} key={index} />:<RightCatagory catagory_detail={catagory} key={index} />)
                })
           }
        </div>
    )
}



const LeftCatagory = ({catagory_detail}) => {

    return (
        <Link to={`/products/${catagory_detail.name}`}>
        <div className='d-flex justify-content-start py-2 product-image'>
            <Paper elevation={3}>
                <div className='row p-4 main-catagories'>
                    <div className='col-6'>
                        <img className='img-fluid' src={catagory_detail.image} />
                    </div>
                    <div className='col-6 d-flex align-items-center'>
                        <div>
                            <h1 className='display-6 text-uppercase'>{catagory_detail.name}</h1>
                            <p>{catagory_detail.description}</p>
                        </div>
                    </div>
                </div>
            </Paper>
        </div>
        </Link>
    )
}

const RightCatagory = ({catagory_detail}) => {
    return (
        <Link to={`/products/${catagory_detail.name}`}>
        <div className='d-flex justify-content-end py-2  product-image'>
            <Paper elevation={3}>
                <div className='row p-4 main-catagories'>
                    <div className='col-6 d-flex align-items-center'>
                        <div>
                            <h1 className='display-6'>{catagory_detail.name}</h1>
                            <p>{ catagory_detail.description }</p>
                        </div>
                    </div>
                    <div className='col-6'>
                        <img className='img-fluid' src={ catagory_detail.image } />
                    </div>
                </div>
            </Paper>
        </div>
        </Link>
    )
}

export default Catagories