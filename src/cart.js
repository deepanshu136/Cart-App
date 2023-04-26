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

handleIncreaseQuantity=(product)=>{
console.log("increase the qty",product);
const{products}=this.state;
const index=products.indexOf(product);

products[index].qty+=1;

this.setState({
  products:products
})
}

handleDecreaseQuantity=(product)=>{
  console.log("decrease the qty",product);
  const{products}=this.state;
  const index=products.indexOf(product);
  if (products[index].qty===0){
    return 
  }
  else
  products[index].qty-=1
  this.setState({
    products:products
  })
}

 handleDeleteProduct=(id)=>{
  const{products}=this.state;
  const items=products.filter((item)=>item.id!==id);//here this will return an array of product whose id is not equal to id passed
  this.setState({
    products:items
  })
 }
  
  render(){
    const{products}=this.state;
    return(
    <div className="cart">
        
        {products.map((product)=>{
           return (
           <CartItem
            product={product}
            key={product.id}
            onIncreaseQuantity={this.handleIncreaseQuantity}
            onDecreaseQuantity={this.handleDecreaseQuantity}
            onDeleteProduct={this.handleDeleteProduct}
            />)
        })}
    </div>
    );
  }
}


export default Cart;