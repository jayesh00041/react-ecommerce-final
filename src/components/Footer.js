import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='container-fluid'>
            
            <footer>
                
                <div className='row align-items-center p-4 m-3 border-top'>
                    <div className='col-md-3 text-center'>
                        <img src='https://template.hasthemes.com/hurst-v1/hurst/img/logo/logo.png' className='img-fluid pb-4' />
                        <div>COPYRIGHT © 2022 HURST ALL RIGHTS RESERVED</div>
                    </div>
                    <div className='col-md-3'>
                        <div class="list-group border-light">
                            <a href="#" class="list-group-item list-group-item-action">About Hurst</a>
                            <a href="#" class="list-group-item list-group-item-action">Contact</a>
                            <a href="#" class="list-group-item list-group-item-action">T&amp;C</a>
                            <a href="#" class="list-group-item list-group-item-action">Account</a>
                            <a href="#" class="list-group-item list-group-item-action">Orders</a>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div class="list-group border-light">
                            <a href="#" class="list-group-item list-group-item-action">Wooden</a>
                            <a href="#" class="list-group-item list-group-item-action">Articles</a>
                            <a href="#" class="list-group-item list-group-item-action">Catagory</a>
                            <a href="#" class="list-group-item list-group-item-action">Products</a>
                            <a href="#" class="list-group-item list-group-item-action">Top Products</a>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div>TO OUR NEWSLETTER</div>
                        <input className='form-control my-3' />
                        <div className='row'>
                            <div className='col-3'><FaInstagram /></div>
                            <div className='col-3'><FaFacebook /></div>
                            <div className='col-3'><FaLinkedin /></div>
                            <div className='col-3'><FaGithub /></div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer