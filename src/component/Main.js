import React from 'react';
import Product from './Product';

function Main(props) {
  const { products, onAdd, onShow } = props;
  return (
    <div className="productPart">

      {products.map((product) => (
        <Product key={product.id} product={product} onAdd={onAdd} onShow={onShow} />
      ))}
    </div>
  );
}

export default Main;
