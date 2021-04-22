import React, { useState } from "react";
import styled from "styled-components";
import img from  '../assets/img/logo.png';
import './style.css'
import {AiOutlineUser} from 'react-icons/ai';
import {AiOutlineShoppingCart} from 'react-icons/ai';


export default class Navbar extends React.Component {
    data ={
        number:''
    }

 

render() {
 
    
 return(
<div className="containerNav">

    <div className="images">
     <img src={img}>
     
     </img>
    </div>

    <div className="search" >
<input  placeholder="¿Qué estás buscando?">

</input>
<hr></hr>
    </div>
<hr></hr>
    
  <div className="dos">
<span>   <AiOutlineUser/>Mi cuenta</span>
  </div>
    

    <div className="uno">
    {this.data.number}

        <span> 
        <AiOutlineShoppingCart/>
        </span>

        </div>




  

</div>

 )

};

}