import React from "react";

class CartItem extends React.Component{
    render(){
        return(
        <div className="cart-item">
            <div className="left-block">
               <img style={Styles.image}/>
            </div>

            <div className="right-block">
                <div style={{fontSize:20 ,
                            color:'#707D9D'
                            }}>Phone</div>

               <div style={{color:'#707D9D'}}>Rs 999</div>

               <div style={{fontSize:13,
                         color:'#707D9D'}}>Qty: 1</div>

               <div className="cart-item-actions">
                 {/* Buttons */}
                </div>

            </div>

        </div>
        );
    }
}

const Styles={
    image:{
        height:110,
        width:110,
        borderRadius:4,
        background:'#FCF9BF'
    }
}
export default CartItem;