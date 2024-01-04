import React from "react";
import {FaCartPlus} from 'react-icons/fa';

const Navbar = (props) =>{
    return (
       
      <div style={styles.nav}>
       
        <div style={styles.cartIconContainer}>
        <button style={styles.cartIcon} ><FaCartPlus/> </button>  
          <span style={styles.cartCount}>{props.count}</span>
        </div>
        
      </div>
    
    );
  }
  
  const styles = {
    cartIcon: {
      height: 32,
      marginRight: 25
    },
  
    nav: {
      marginTop:8,
      height: 60,
      // borderRadius:0,
      boxShadow: '0px 0px 2px 3px #F4AAB9',
      background: '	#89CFEF',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    cartIconContainer: {
      position: 'relative'
    },
    cartCount: {
      background: 'yellow',
      borderRadius: '50%',
      padding: '4px 8px',
      position: 'absolute',
      right: 0,
      top: -9
    },
   
  };
  
  
  export default Navbar;