import React from "react";
import {FaPlus,FaMinus,FaTrash} from 'react-icons/fa';


class CartItem extends React.Component{
    // addidng state to the component
    constructor(){
        super();
        this.state={
            price:999,
            title:'Mobile Phone',
            qty:1,
            img:''
        }
        // this.testing();
    }

    // testing(){
    //     const promise= new Promise((resolve,reject)=>{
    //         setTimeout(()=>{
    //             resolve('done');
    //     },5000);
    // })
    // promise.then(()=>{
    //     this.setState({qty:this.state.qty+1});


    //     console.log('state',this.state);
    // })
    // }

    increaseQuantity = () =>{
       this.setState((prevState)=>{
         return{
            qty:prevState.qty+1
         }
        });
    }
    decreaseQuantity = () =>{
        const {qty}=this.state;

        if(qty===0){
            return;
        }
        this.setState((prevState)=>{
            return{
                qty:prevState.qty-1
            }
        });
    }
    render(){
        const{price,title,qty}=this.state;
        return(
        <div className="cart-item">
            <div className="left-block">
               <img style={Styles.image}/>
            </div>

            <div className="right-block">
                <div style={{fontSize:20 ,
                            color:'#707D9D'
                            }}>{title}</div>

               <div style={{color:'#707D9D'}}>Rs {price}</div>

               <div style={{fontSize:13,
                         color:'#707D9D'}}>Qty: {qty}</div>

               <div className="cart-item-actions" style={{padding:2}}>
                 {/* Buttons */}
               <button className="action-icons" onClick={this.increaseQuantity}><FaPlus/></button> 
               <button className="action-icons" onClick={this.decreaseQuantity}><FaMinus/></button>
               <button className="action-icons"><FaTrash/></button>
                 
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