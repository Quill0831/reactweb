import React from 'react'
import { Link } from 'react-router-dom';



export default function Product(props) {
  const {product , onAdd , onShow} = props;
  return (
   
    <div>

<div className='productCard'>
<Link to="/Profile"><img onClick={()=>onShow(product)} src={product.img} className="productImg" alt="" /></Link>
<p>{product.title}</p>
<p>${product.price}</p>
<p>{product.des}</p>
</div>
<div className='buttonPart'>
<button className='buyButton' onClick={()=>onAdd(product)}>加入購物車</button>
</div>

    </div>
  )
}
