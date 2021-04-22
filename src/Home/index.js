import React from 'react';

import axios from 'axios';
import Footer from '../Footer';
import './style.css';
import BeautyStars from 'beauty-stars';
import Slide from '../slider';
import InfiniteCarousel from 'react-leaf-carousel';

export default class Home extends React.Component {
 
  state = {
    data: [],
    contador : 0
  }

  installments =[]
  componentDidMount() {
    axios.get(`Products`)
      .then(res => {
        const data = res.data;
        console.log(data)
        this.setState({ data });
      })
  }

 cart(name) {

alert('Agregado con exito')
 const d = this.setState({
    contador : this.state.contador+1
 });
localStorage.setItem('count', this.state.contador ++)

  }
  render() {
      return (


     <div className="container">
      
       
       {
         
        this.state.data.map((person  )  =>
          
            <div className="card" > 
                  <img className="image"  src={person.imageUrl}>
             
             </img>

             <p>{person.productName}</p>
             <div className="containerStars">

                 <div  className="stars">
                 <BeautyStars
            
             inactiveColor="gray"
             border="red"
             activeColor="red"
             size="8px"
              value={person.stars}
             />

                 </div>
           
                  </div>
             
             <p className="price">por ${person.price}</p>
      
             <button onClick={(e) => this.cart(person.productName)} className="button">COMPRAR</button>

                               </div>
                     
                     ) 
         
         
         }

     </div>
  

      );

        
        
        
        }


 
}