import React, { useState } from 'react'
import {db} from './firebase'
import { uid } from 'uid'
import { useAuth } from './firebase'
import {getDatabase  , ref, set} from 'firebase/database'

const Cart = (props) => {

  const {cartItems , onAdd , onRemove , onDelete } = props

  const itemPrice = cartItems.reduce((a , c)=>a + c.price * c.qty ,0 );
  const currentUser = useAuth();

  function writeUserData(cartItems) {
    const db = getDatabase();
    set(ref(db,'users/' + {currentUser}), {
  cartItems,
    });
  }


  const toString = () =>{
   const test =  cartItems.qty;
    console.log(test)
  }
  return (
    <div className='cart'>
       <h2 className='cartLogo'>購物車</h2>
      <div className='cartLogo'>{cartItems.length === 0 && <div> 您尚未選購任何商品</div>}</div>
     
      <table className='cartTable'>
<tbody>
<tr>
<td></td>
<td></td>
<td className='titlePart'>商品</td>
<td className='otherPart'>價格</td>
<td className='otherPart'>數量</td>
<td className='otherPart'>小計</td>
</tr>
</tbody>
{cartItems.map((item) => (
  <tbody>
<tr>
<td><button className='deleteButton' onClick={()=>onDelete(item)}>X</button></td>
<td><img className='cartImg' src={item.img} alt="" /></td>
<td>{item.title}</td>       
<td className='otherPart'>{item.price}</td>       
<td className='otherPart'>{item.qty} <button className='addDeleteBut' onClick={()=>onAdd(item)}>+</button> <button className='addDeleteBut' onClick={()=>onRemove(item)}> - </button></td>       
<td className='otherPart'>{item.qty * item.price}</td>       
</tr>
</tbody>
))}

</table>



{cartItems.map((item) => (

<div className='mobileCartTable'>
<button className='deleteButton' onClick={()=>onDelete(item)}>X</button>
<hr />
<p><span className='mobileTitle'>商品:</span>  {item.title}</p>
<hr />
<p><span className='mobileTitle'>價格:</span> NT${item.price}</p>
<hr />
<p><span className='mobileTitle'>數量:</span> {item.qty} <button className='addDeleteBut' onClick={()=>onAdd(item)}>+</button> <button className='addDeleteBut' onClick={()=>onRemove(item)}> - </button></p>
<hr />
<p><span className='mobileTitle'>小計:</span> {item.qty * item.price}</p>

</div>

))}

<p className='totalPrice'>總計: {itemPrice}</p> 
<button className='payButton'onClick={writeUserData}>前往結帳</button>
{/* 
{console.log(cartItems.map(x => x.id))}
{console.log(cartItems.map(x => x.qty))} */}

       </div>


    
  )
}

export default Cart