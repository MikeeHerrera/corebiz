import './style.css'
import {IoMdMail} from 'react-icons/io';
import {MdHeadsetMic}  from 'react-icons/md';
function Footer(){
    return (
        
        <footer >
              <div className="footer">
              <div className="one">
                  <div className="hijo1">  
                  <p className="resalt">Ubicación</p>
                  <hr></hr>
           <p>Avenida Andrómeda 2000. Bloco 6 e 8</p>
           <p>Alphavile SP</p>
           <p>brasil@corebiz.ag</p>
           <p>+55 11 3090 1039</p>

                  </div>
          
       </div>
       <div className="two">
           <div>
           <button className="buttonF">
           <IoMdMail  /> 
            CONTÁCTANOS

            </button>

           </div>

           <div>
           <button className="buttonF"> <MdHeadsetMic className="icon" />HABLA CON UN CONSULTOR</button>

           </div>


       </div>

       <div className="three">

     <img  src="https://www.traycorp.com.br/wp-content/uploads/2020/03/corebiz.jpg"></img>
     <img className="vtex" src="https://www.traycorp.com.br/wp-content/uploads/2020/03/corebiz.jpg"></img>
       </div>
              
</div>
      

      </footer>
    );
}

export default Footer;