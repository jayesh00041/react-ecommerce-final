import React from 'react';
import './App.css';
import { NavigationBar, Footer, Loader } from './components';
import { Home, Product, ProductsPage, CartPage } from './pages/';
import { BrowserRouter, Routes, Route } from 'react-router-dom'



function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <NavigationBar />
        <main>
          <Routes>
            <Route path="/" >

              <Route index element={<Home />} />
              <Route path="/products/:catagory" element={<ProductsPage />} />
              <Route path="/product/:p_id" element={<Product />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="*" element={<div className='d-flex justify-content-center'><img src='https://fads.org.in/assets/public/img/404.gif' style={{height:'50vh'}}/></div>} />

            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
