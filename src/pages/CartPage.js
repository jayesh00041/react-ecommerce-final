import React from 'react'
import { removeFromCart, decreaseCart, add, getTotals, clearCart } from '../features/cart/cartSlice';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import { FaRegCheckCircle, FaTrash } from 'react-icons/fa';
import cart from '../store/cart';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';


const CartPage = () => {
    const dispatch = useDispatch(state => state.cart);
    const cartItems = useSelector((state) => state.cart);
    const [open, setOpen] = React.useState(true);
    dispatch(getTotals());
    function handdleCheckout() {
        dispatch(clearCart());
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="list-group list-group-numbered p-3">
            <div class="text-center">
                <h1 class="display-6">Cart</h1>
                <span class="border-bottom">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            </div>
            {(cartItems.cartItems.length === 0) ? <h4>No Item Found</h4> :
                cartItems.cartItems.map((item) => {
                    return (
                        <>
                            <div className="row d-flex justify-content-between align-items-center cart-item border-bottom">
                                <div className="col-2"><Avatar src={item.image} sx={{ width: '3rem', height: '3rem' }} /></div>
                                <div className="col-4">
                                    {item.title}
                                </div>
                                <div className="col-2">
                                    <button className='btn btn-sm' onClick={() => dispatch(decreaseCart(item))}>-</button>
                                    {item.cartQuantity}
                                    <button className='btn btn-sm' onClick={() => dispatch(add(item))}>+</button>
                                </div>
                                <div className="col-2">
                                    <button className='btn btn-sm' onClick={() => dispatch(removeFromCart(item))}><FaTrash /></button>
                                </div>
                                <div className='col-2'>${item.price * item.cartQuantity}</div>
                            </div>

                        </>
                    )
                })


            }
            {(cartItems.cartItems.length > 0) && <><div className='row'>
                <div className='col-10 text-center'>Total</div><div className='col-2'>
                    <strong>${cartItems.cartTotalAmount}</strong>
                </div>

            </div>

                <div className='row mt-4'>
                    <button className='btn btn-secondary' onClick={handdleCheckout}>Proceed to Checkout</button>
                </div>
            </>}
            <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">
                    {"Order Placed Successful"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <div className='text-center px-4 text-success'>
                            <FaRegCheckCircle size='15rem' inverse  />
                        </div>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>

                </DialogActions>
            </Dialog>
        </div>
    )
}

export default CartPage