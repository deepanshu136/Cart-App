import React from "react";
import {FaPlus,FaMinus,FaTrash} from 'react-icons/fa';


class CartItem extends React.Component{
    render(){
        console.log('this.props',this.props);
        const{price,title,qty}=this.props.product;
        const {product}=this.props;
        
        return(
        <div className="cart-item">
            <div className="left-block">
               <img style={Styles.image} src={product.img}/>
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
               <button className="action-icons" onClick={()=> this.props.onIncreaseQuantity(this.props.product)}><FaPlus/></button> 
               <button className="action-icons" onClick={()=>this.props.onDecreaseQuantity(this.props.product)}><FaMinus/></button>
               <button className="action-icons" onClick={()=>this.props.onDeleteProduct(this.props.product.id)}><FaTrash/></button>
                 
                </div>

            </div>

        </div>
        );
    }
}

const Styles={
    image:{
        marginTop:4,
        height:110,
        width:110,
        borderRadius:4,
        background:'#FCF9BF',
        boxShadow: '0px 0px 3px 2px rgb(188, 162, 230)'
    }
}
export default CartItem;