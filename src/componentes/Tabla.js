import React , {Component} from 'react';
import {render} from 'react-dom';
import {Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom';
import Condiciones from './Condiciones';

var styles2 = {

  position: 'relative',
  left: '50%', 
  top:'50%',
  transform: 'translate(-50%, -50%)',
  width:'50%',

}

class Tabla extends Component{


render(){
  if(this.props.datos.tipoOpt == "max"){
  return(

<div>
  <main className="index">

  <header className="masthead d-flex">
  <div className="container text-center my-auto">
  <div className="container p-4">
  


	<table className="table table-bordered table-dark">
  <thead>
    <tr>
      

      {this.props.datos.cabecera.map(elem => {

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

<p><strong>Valor Optimo: {this.props.datos.valorOpt}</strong></p>

{this.props.datos.ptosOpt.map(e1 => {


  return(<div><p><strong>{e1.id}: {e1.value}</strong></p></div>)
  

})}


  </div>
  </div>
  </header>
</main>

</div>




)}
else{
return(
  <div>
  <main className="index">

  <header className="masthead d-flex">
  <div className="container text-center my-auto">
  <div className="container p-4">
  

<p><strong>Valor Optimo: {this.props.datos.valorOpt}</strong></p>

{this.props.datos.ptosOpt.map(e1 => {


  return(<div><p><strong>{e1.id}: {e1.value}</strong></p></div>)
  

})}


  </div>
  </div>
  </header>
</main>

</div>




)

}

}

}


export default Tabla