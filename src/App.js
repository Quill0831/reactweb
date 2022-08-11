import React from 'react'
import Nav from './component/Nav';
import Home from './component/Home';
import Footer from './component/Footer';
import Faq from './component/Faq';
import Main from './component/Main';
import Cart from './component/Cart';
import Login from './component/Login';
import data from './data';
import {  Routes, Route  } from 'react-router-dom';
import { useState } from 'react';



function App  () {

  const { products } = data;

  const [cartItems , setCartItems] = useState([]);

  const onAdd = (product) => {
    //1. 找出該新增商品是否已經在購物車內
    const exist = cartItems.find((x) => x.id === product.id);

    if (exist) {
      //有:更改cartItem之內容，
      setCartItems(cartItems.map((x) => (x.id === product.id
        ? { ...exist, qty: exist.qty + 1 } : x)));
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
     
    }
  };

  const onRemove = (product) =>{
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(cartItems.map((x) => (x.id === product.id
        ? { ...exist, qty: exist.qty - 1 } : x)));
    }
  }

  const onDelete = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      // 移除:留下該選擇以外的其他物件
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    }
  }

  


  
  return (
   <div>

   
    <Nav/>

    <Routes>
      <Route path="/" element={ <Home/>}/>
      <Route path="/reactlearning" element={ <Home/>}/>
      <Route path="/ReactPractice" element={ <Home/>}/>
      <Route path="/Home" element={ <Home/>}/>
      <Route path="/Main" element={<Main products={products} onAdd={onAdd}  />}/>
      <Route path="/Cart" element={<Cart cartItems={cartItems}  onAdd={onAdd} onRemove={onRemove} onDelete={onDelete}  />}/>
      <Route path="/Login" element={ <Login/>}/>
      <Route path="/Faq" element={ <Faq/>}/>
      </Routes>
   
    <Footer/>
   </div>
  )
}

export default App