import React, { Component } from 'react';
import FullNameprops from './FullNameprops';
import Professionprops from './Professionprops';
import '../../App.css';
import './Bioprops.css';
 class Bioprops extends Component {
    render() {
        return (
            <div>
         <FullNameprops className="name" name="Rayen Guesmi"> 
         <img className="my-image" src=".\ray.jpg" alt="img"/> 
         </FullNameprops>
         <Professionprops className="profession" profession="I'm a FULL STACK JS DEVELLOPER student ,
          the fact of turning some lines of codes to a functional object is just amazing"/>
        </div>
        )
    }
}

export default Bioprops ;
