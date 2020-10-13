import React, { useState, useEffect } from 'react';
import Product from './AllShop/Product/Product';
import fakeData from '../../fakeData/index'
import { Container, Row, Col, Button } from 'react-bootstrap';
import ShopHeader from './AllShop/ShopHeader/ShopHeader';
import "./Shop.css"
import Shopcart from './AllShop/ShopCart/Shopcart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';
const Shop = () => {
    const top =fakeData.slice(0,10)
    const [cart,setCart] =useState([])
    useEffect(()=>{
        const database= getDatabaseCart()
        const key = Object.keys(database);
        const priviusProduct=key.map(existKey=>{
            const product =fakeData.find(pd=>pd.key===existKey)
            product.quantity=database[existKey]
            return product
        })
        setCart(priviusProduct)
    },[])
    const addToCartHandler=(product)=>{
        const sameProduct = cart.find(pd=>pd.key===product.key)
        let newCart;
        let count=0
        if(sameProduct){
            count=product.quantity=product.quantity+1;
            const other=cart.filter(pd=>pd.key!==product.key);
            newCart =[...other,product]
            
        }else{
            count=product.quantity=1
            newCart =[...cart,product]
        }
         
        setCart(newCart)
        addToDatabaseCart(product.key, count)
    }
    return (
        <div>
           <ShopHeader></ShopHeader>
            <Container>

                <Row>
                        <Col md={9} className="all-product">
                            {
                             top.map(pd=><Product key={pd.key} addToCartHandler={addToCartHandler} product={pd}></Product>)
                            }
                        </Col>
                        <Col md={3}>
                            <Shopcart cart={cart}>
                                <Link to="/review">
                                    <Button>Cart Review</Button>
                                </Link>
                            </Shopcart>
                        </Col>
                       
             </Row>
             </Container>
            
        </div>
    );
};

export default Shop;