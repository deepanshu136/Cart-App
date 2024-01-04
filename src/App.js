import React from 'react';
import Cart from './cart';
import Navbar from './navbar';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

class App extends React.Component {
 
  constructor(){
    super();
    this.state={
        products:[],
        loading:true
    }
    // this.testing();
}


componentDidMount (){
firebase.initializeApp({
  apiKey: "AIzaSyD4xLJGUxJSdDPKZTueOw0nr8T1muNdaYU",
  authDomain: "cart-7a4bc.firebaseapp.com",
  projectId: "cart-7a4bc",
});
  // firebase
  //  .firestore()
  //  .collection('products')
  //  .get()
  //  .then((snapshot)=>{
  //   console.log(snapshot);

  //   snapshot.docs.map((doc)=>{
  //      console.log(doc.data())
  //   });
   
  //   const products=snapshot.docs.map((doc)=>{
  //     const data=doc.data();

  //     data['id']=doc.id;
  //     return data;
  //   })
  //   this.setState({products,
  //                  loading:false })
     
  //  })

  firebase
   .firestore()
   .collection('products')
   .orderBy('price','asc')
   .onSnapshot((snapshot)=>{
    console.log(snapshot);

    snapshot.docs.map((doc)=>{
       console.log(doc.data())
    });
   
    const products=snapshot.docs.map((doc)=>{
      const data=doc.data();

      data['id']=doc.id;
      return data;
    })
    this.setState({products,
                   loading:false })
     
   })

  
  
    
}

handleIncreaseQuantity=(product)=>{
console.log("increase the qty",product);
const{products}=this.state;
const index=products.indexOf(product);

// products[index].qty+=1;

// this.setState({
//   products:products
// })

const docRef=firebase.firestore().collection('products').doc(products[index].id);

docRef
  .update({
    qty:products[index].qty+1
  })
  .then(()=>{
    console.log('document is updated');
  })
  .catch((error)=>{
    console.log('Error',error);
  })


}

handleDecreaseQuantity=(product)=>{
  console.log("decrease the qty",product);
  const{products}=this.state;
  const index=products.indexOf(product);
  if (products[index].qty===0){
    return 
  }
  // else
  // products[index].qty-=1
  // this.setState({
  //   products:products
  // })
  const docRef=firebase.firestore().collection('products').doc(products[index].id);

  docRef
   .update({
    qty:products[index].qty-1
   })
   .then(()=>{
    console.log('document has been updated');
   })
   .catch((error)=>{
    console.log('Error :',error);
   })
}

 handleDeleteProduct=(id)=>{
  const{products}=this.state;
  // const items=products.filter((item)=>item.id!==id);//here this will return an array of product whose id is not equal to id passed
  // this.setState({
  //   products:items
  // })
  const docRef=firebase.firestore().collection('products').doc(id);

  docRef
   .delete()
   .then(()=>{
    console.log("Deleted Sucessfully");
   })
   .catch((error)=>{
    console.log("Error :",error);
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
    if(product.qty>0){
    cartTotal=cartTotal+product.price*product.qty
    }
   return '';
  });
  return cartTotal;
 }

 addProduct =()=>{
  
  firebase
   .firestore()
   .collection('products')
   .add({
       img:'',
       price:50000,
       qty:1,
       title:'Washing Machine'
   })
   .then((docRef)=>{
    console.log('Product has been added',docRef);
   }) 

   .catch((error)=>{
    console.log('Error :',error);
   })
 }

  render(){
    const{products ,loading}=this.state;
  return (
    <div className="App">

      <Navbar count={this.getCartCount()}/>
      {/* <button onClick={this.addProduct} style={{marginTop: 8,marginLeft:16,marginBottom:4,fontSize:15, backgroundColor: 'Lightyellow', borderRadius:4}}>Add a product</button> */}
      <Cart 
      products={products}
      onIncreaseQuantity={this.handleIncreaseQuantity}
      onDecreaseQuantity={this.handleDecreaseQuantity}
      onDeleteProduct={this.handleDeleteProduct}
      />
      {loading && <h1>Loading Products ...</h1>}
      <div style={{fontSize: 20,padding:20,color:'#FFFFFF'}}> TOTAL = {this.getCartTotal()}</div>
    </div>
  );
}
}

export default App;
