import React , {Component} from 'react';
import {render} from 'react-dom';
import {Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom';
import Condiciones from './Condiciones';


class Tabla extends Component{


render(){

  return(

<div className="container p-4">
	
	<table className="table table-bordered table-dark">
  <thead>
    <tr>
      

      {this.props.datos.variables.map(elem => {

                    return(
                       
                      
                      <th scope="col">{elem}</th>
                      
                      )

                  })}
      
      
    </tr>
  </thead>
 
 
  <tbody>
   
  	{this.props.datos.tablaFinal.map(elem1 => {  return(


    <tr>  	
  	
  	
  {elem1.map( elem2 => {return(


    <th scope="col">{elem2}</th>  

    ) }

    )	}


    </tr>

    ) }



    )}

  	

  
  	
  </tbody>
   
</table>

</div>




)

}

}


export default Tabla