import React from 'react';
import { Button, Col } from 'react-bootstrap';
import "./product.css"

const Product = ({ product,addToCartHandler }) => {
    const { img, name, price, seller, stock } = product
    // const new
    return (

        
            <div className="flex product">
                <img src={img} alt="" />
                
                <div className="product-detail">
                    <h5 className="productName">{name}</h5>
                    <div>
                        <p><small>By : {seller}</small></p>
                        <p>in stock : {stock}</p>
                        <h5>price : ${price}</h5>
                    </div>
                     <Button onClick={()=>addToCartHandler(product)} >Add to cart</Button>
                </div>
                <div>
                   
                </div>
            </div>
       


    );
};

export default Product;