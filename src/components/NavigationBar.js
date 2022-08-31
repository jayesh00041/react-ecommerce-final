import React, { useState, useEffect } from 'react'
import { FaBars, FaRemoveFormat, FaShoppingCart, FaTrash } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css'
import Badge from '@mui/material/Badge';
import { BsXLg } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { Avatar } from '@mui/material';
import { removeFromCart, decreaseCart, add, } from '../features/cart/cartSlice';



export default function NavigationBar() {
  const dispatch = useDispatch(state => state.cart)
  const [manu, setManu] = useState(true);
  const [cart, setcart] = useState(false);
  const cartItems = useSelector((state) => state.cart);
  let mountedStyle = null;

  useEffect(() => {
    mountedStyle = { animation: "inAnimation 500ms ease-in" };
  }, [manu])

  function handdleManu() {
    setManu(() => !manu);
  }

  function handleCartClick() {
    setcart(() => !cart);
  }


  return (
    <nav>
      
      <div className='row navigation-bar align-items-center'>
        <div className='col-3 text-left'>
          <span onClick={handdleManu} style={mountedStyle} className='menu-icon'>
            {(manu) ? <FaBars size="1.5rem" /> : <BsXLg size="1.5rem" />}
          </span>
        </div>
        <div className='col-6 text-center'>
          <Link to='/' ><img src='https://template.hasthemes.com/hurst-v1/hurst/img/logo/logo.png' alt='Logo' /></Link>
        </div>
        <div className='col-3 text-end pe-4'>
          <span onClick={handleCartClick}>
            {cart ? <BsXLg size="1.5rem" /> : (<Badge color="primary" badgeContent={cartItems.cartItems.length}><FaShoppingCart size='1.5rem' />
            </Badge>)}</span>
        </div>
      </div>
      {
        !manu && (<div className='manu'>
          <Link to='/'><div className='manu-list'>Home</div></Link>
          <Link to='/products/all'><div className='manu-list'>Catagories</div></Link>
          <Link to='/products/all'><div className='manu-list'>Products</div></Link>
          <Link to='/products/about'><div className='manu-list'>About Us</div></Link>
          <Link to='/products/contact'><div className='manu-list'>Contact</div></Link>
          <div className='manu-list'>Account</div>
        </div>)
      }
      {
        cart && (<div className='cart-manu px-2'>
          <div className="list-group list-group-numbered">
            {
              cartItems.cartItems.map((item) => {
                return (
                  <>
                    <div className="row d-flex justify-content-between align-items-center cart-item border-bottom">
                      <div className="col-2"><Avatar src={item.image} sx={{ width: '1.5rem', height: '1.5rem' }} /></div>
                      <div className="col-4">
                        {(item.title.length > 10) ? item.title.substring(0, 10) + '...' : item.title}
                      </div>
                      <div className="col-4">
                        <button className='btn btn-sm' onClick={() => dispatch(decreaseCart(item))}>-</button>
                        {item.cartQuantity}
                        <button className='btn btn-sm' onClick={() => dispatch(add(item))}>+</button>
                      </div>
                      <div className="col-2">
                        <button className='btn btn-sm' onClick={() => dispatch(removeFromCart(item))}><FaTrash /></button>
                      </div>
                    </div>

                  </>
                )
              })


            }
            <div className='d-flex justify-content-center view-cart'>
              <Link to='/cart'><button className='btn btn-secondary btn btn-block w-100'>View Cart</button></Link>
            </div>

          </div>
        </div>)
      }



    </nav>

  )
}
