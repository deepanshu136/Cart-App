import React from "react";
import CartItem from "./Cartitem";


class Cart extends React.Component{
  constructor(){
    super();
    this.state={
        products:[
          {
            price:20000,
            title:'Mobile Phone',
            qty:1,
            img:'',
            id:1
          },

          {
            price:1999,
            title:'Watch',
            qty:1,
            img:'',
            id:2
          },

          {
            price:500,
            title:'Head Phone',
            qty:1,
            img:'',
            id:3
          },

          {
            price:1999,
            title:'Speaker',
            qty:1,
            img:'',
            id:4
          },

          {
            price:2999,
            title:'Denim',
            qty:1,
            img:'',
            id:5
          },

        ]
    }
    // this.testing();
}
  
  render(){
    const{products}=this.state;
    return(
    <div className="cart">
        
        {products.map((product)=>{
           return <CartItem product={product} key={product.id} />
        })}
    </div>
    );
  }
}


export default Cart;