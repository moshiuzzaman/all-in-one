import React from 'react';
import { Button, Col } from 'react-bootstrap';
import "./ReviewPd.css"
import { removeFromDatabaseCart } from '../../../../utilities/databaseManager';

const ReviewPd = ({ product,removeHandelar }) => {
    const { img, name, price, seller, quantity } = product
    // const new
    return (

        
            <div className="flex product">
                <img src={img} alt="" />
                
                <div className="product-detail">
                    <h5 className="productName">{name}</h5>
                    <div>
                        <p><small>By : {seller}</small></p>
                        <p>Quantity : {quantity}</p>
                        <h5>price : ${price}</h5>
                    </div>
                     <Button onClick={()=>removeHandelar(product.key)} >Remove</Button>
                </div>
                <div>
                   
                </div>
            </div>
       


    );
};

export default ReviewPd;