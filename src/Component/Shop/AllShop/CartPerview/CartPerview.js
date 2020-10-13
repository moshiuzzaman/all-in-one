import React, { useState } from 'react';
import ShopHeader from '../ShopHeader/ShopHeader'
import { useEffect } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../../../utilities/databaseManager';
import fakeData from '../../../../fakeData';
import Product from '../Product/Product';
import ReviewPd from '../ReviewPd/ReviewPd';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Shopcart from '../ShopCart/Shopcart';
import { Link } from 'react-router-dom';
import happy from '../../../../images/giphy.gif'

const CartPerview = () => {
    const [cart,setCart] =useState([])
    useEffect(()=>{
            const database= getDatabaseCart()
            const key = Object.keys(database)
            const cart =key.map(pd=>{
                const findProduct =fakeData.find(product=>product.key === pd)
                findProduct.quantity=database[pd]
                return findProduct
            })
            setCart(cart)
    },[])
    const removeHandelar=(key)=>{
            const newCart=cart.filter(pd=>pd.key !== key)
            setCart(newCart)
            removeFromDatabaseCart(key)
    }
    const [order, setorder]=useState(false)
    const placeOrderHandelar=()=>{
        setCart([]);
        processOrder();
        setorder(true)
    }
    let thankyou
    if(order){
        thankyou=<img src={happy} alt=""/>
    }
    return (
        <>
        <ShopHeader></ShopHeader>
            <Container>

                <Row>
                        <Col md={9} className="all-product">
                            {
                                cart.map(pd=><ReviewPd removeHandelar={removeHandelar} product={pd}></ReviewPd>)
                            }
                            {
                                thankyou
                            }
                        </Col>
                        <Col md={3}>
                            <Shopcart cart={cart}>
                                
                                    <Button onClick={placeOrderHandelar}>Place Order</Button>
                                
                            </Shopcart>
                        </Col>
                       
             </Row>
             </Container>
        
        </>
        
    );
};

export default CartPerview;