import React from "react";
const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <img src={product.image} alt="" />
      <h1>{product.name}</h1>
      <h7>{product.description}</h7>
      <p className="price">{product.price}</p>
    </div>
  );
};
export default ProductCard;
