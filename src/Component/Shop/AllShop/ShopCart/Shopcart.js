import React from 'react';

const Shopcart = ({cart, children}) => {
    const total =cart.reduce((sum, item) => sum + item.price*item.quantity,0)
    let shipping=0;
    if(total>500){
        shipping=5.98
    }else if(total>300){
        shipping=9.98
    }else if(total>150){
        shipping=17.98
    }else if(total>0){
        shipping=21.98
    }
    const toFixed=(num)=>{
        return num.toFixed(2)
    }
    const totalBeforeTax = total+shipping;
    const tax=totalBeforeTax/10;
    const grandTotal =totalBeforeTax+tax;
    
    return (
        <div className="shop-cart">
            <h5>Order Summary</h5>
            <h5>Items ordered : {cart.length}</h5>
            <div className="shop-cart-detail">
                <p>Items Total :<span>${toFixed(total)}</span></p>
                <p>Shipping & Handling :<span>${shipping}</span></p>
                <p>Total before tax: :<span>${toFixed(totalBeforeTax)}</span></p>
                <p>Estimated Tax:	 :<span>${toFixed(tax)}</span></p>
                <h5>Order Total: :<span>${toFixed(grandTotal)}</span></h5>
                {
                    children
                }
            </div>
        </div>
    );
};

export default Shopcart;