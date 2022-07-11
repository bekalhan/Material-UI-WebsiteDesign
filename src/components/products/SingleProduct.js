import React from 'react';
import {
    ExtraActionsWrapper,
    Product,
    ProductActionButton,
    ProductActionsWrapper,
    ProductAddToCart,
    ProductFavButton,
    ProductImage,
    ProductMetaWrapper,
  } from "../../styles/product";
  import ProductMeta from './ProductMeta';

function SingleProduct({product,matches}) {

  console.log("single product ",product," matches : ",matches);
  return (
    <Product>
        <ProductImage src={product.image} />
        <ProductMeta product={product} matches={matches} />
    </Product>
  )
}

export default SingleProduct;