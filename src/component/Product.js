/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { Link } from 'react-router-dom';

export default function Product(props) {
  const { product, onAdd, onShow } = props;
  return (

    <div>

      <div className="productCard">
        <Link to="/Profile">
          <img onClick={() => onShow(product)} src={product.img} className="productImg" alt="product" />
        </Link>
        <p>{product.title}</p>
        <p>
          $
          {product.price}
        </p>
        <p>{product.des}</p>
      </div>
      <div className="buttonPart">
        <button type="button" className="buyButton" onClick={() => onAdd(product)}>加入購物車</button>
      </div>

    </div>
  );
}
