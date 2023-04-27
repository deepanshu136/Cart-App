import React from 'react';

import Cart from './cart';
import Navbar from './navbar';
class App extends React.Component {
 
  constructor(){
    super();
    this.state={
        products:[
          {
            price:20000,
            title:'Mobile Phone',
            qty:1,
            img:'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            id:1
          },

          {
            price:1999,
            title:'Watch',
            qty:1,
            img:'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
            id:2
          },

          {
            price:500,
            title:'Head Phone',
            qty:1,
            img:'https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=813&q=80',
            id:3
          },

          {
            price:1999,
            title:'Speaker',
            qty:1,
            img:'https://images.unsplash.com/photo-1545454675-3531b543be5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            id:4
          },

          {
            price:2999,
            title:'Denim',
            qty:1,
            img:'https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1009&q=80',
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

 getCartCount=()=>{
  const {products}=this.state;

  let count=0;
  
  products.forEach((product)=>{
    count =count+product.qty;
  })
  return count;

 }

 getCartTotal=()=>{
  const {products}=this.state;
 
  let cartTotal=0;
  products.map((product)=>{
    cartTotal=cartTotal+product.price*product.qty
  })
  return cartTotal;
 }

  render(){
    const{products}=this.state;
  return (
    <div className="App">

      <Navbar count={this.getCartCount()}/>
      <Cart 
      products={products}
      onIncreaseQuantity={this.handleIncreaseQuantity}
      onDecreaseQuantity={this.handleDecreaseQuantity}
      onDeleteProduct={this.handleDeleteProduct}
      />
      <div style={{fontSize: 20,padding:20,color:'#FFFFFF'}}> TOTAL = {this.getCartTotal()}</div>
    </div>
  );
}
}

export default App;
