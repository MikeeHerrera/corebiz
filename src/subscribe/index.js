import './style.css';
import { FaBeer } from 'react-icons/fa';
import axios from 'axios';
import react, { Component, Fragment, SyntheticEvent } from 'react';

class Subscribe extends Component {
  email = '';
name='';

submit = async (e) => {
  e.preventDefault();
  const response = await      axios.post('newsletter',{

    email:this.email,
    name:this.name
  }).then(data=>{
   alert(data.data.message)
//     <Alert severity="success">
//   <AlertTitle>Success</AlertTitle>
//   data.data.message
// </Alert>
    console.log(data.data.message)
  })
}

render (){



return(
    <div className="containerFull">
        <div className="containerHijo"> 
        <div className="title">
        <span >¡Únete a nuestras novedades y promociones!</span>

        </div>

        <form  onSubmit={this.submit}>
  <label>

    <input onChange={  e => this.name = e.target.value}   type="text" name="name" placeholder="Ingresa tu nombre"  required/>
  </label>

  <label>
    <input  onChange={  e => this.email = e.target.value}  type="email" name="email"  placeholder="Ingresa tu email"  required />
  </label>
 <button type="submit" > Suscribirme</button>
</form>


        </div>

        
    </div>
)
}
}
export default Subscribe;