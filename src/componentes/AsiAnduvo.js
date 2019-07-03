import React , {Component} from 'react';
import {render} from 'react-dom';
import {Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom';
import Condiciones from './Condiciones';
import App from './App';


class Cantidades extends Component{

 
  constructor(){

    super();
    this.state={

      vars:'',
      rest:''
      
    }

    

    this.handleChange = this.handleChange.bind(this);
    //this.agregarDatos = this.agregarDatos.bind(this);
  }

  componentDidMount(){
    
    /*const tit = this.props.match.params.titulo;*/
    /*this.setState(() => ({titulo: tit}))*/
    console.log(this.props);


  }

  handleChange(e){

    const {name,value} = e.target;
    console.log(this.state);
    this.setState({
      [name]:value

    });

  }
  
      
    

  

  render(){
    
    return(
  
  
  <div>
      <div className="container"> 
          <div className="row">
            <div className="col 4 push-s4 mx-auto">
            
              <div className="card">
                <div className="card-content">
                  <form onSubmit={()=> this.props.funcion(this.state)}>
                    <div className="row">
                      <div className="input-field col s12">
                        <input name="vars" onChange={this.handleChange} type="text" placeholder="cantidad de variables" value={this.state.vars}/>
                      </div>
                    </div>
                    <div className="row">

                      <div className="input-field col s12">
                        <input name="rest" onChange={this.handleChange} type="text" placeholder="cantidad de restricciones" value={this.state.rest}/>
                      </div>
                      
                      
                        <Link to="/Condiciones">
                        <button type="submit" onClick={() => this.props.funcion(this.state)} className="btn btn-light-blue darken-4">OK</button>
                        </Link>
                      
                      
                     
                    </div>                    
                  </form>
                  
                </div>
              </div>

            </div>
          </div>  
    </div>
    </div> 


)
  

}

}


export default Cantidades;










import React , {Component} from 'react';
import {render} from 'react-dom';
import {Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom'
import Condiciones from "./Condiciones";
import Cantidades from "./Cantidades";

var lobo;

class App extends Component {  

constructor(props){

  super(props);
  this.state={

    vars:'',
    res:'',
    restricciones:[],
    variables:[]
    

  }
  this.agregarDatos = this.agregarDatos.bind(this);


}

componentDidMount(){
    
    /*const tit = this.props.match.params.titulo;*/
    /*this.setState(() => ({titulo: tit}))*/
    console.log(this.state);
    console.log(this.props)


  }


  agregarDatos(result){
    var arr1;
    var arr2;
    //console.log(this.state);
    for(var i; i<Number(result.rest);i++){
      arr1[i] = '' ;
    }
    for(var j; j<Number(result.vars);j++){
      arr2[j] = '' ;
    }
    this.setState({vars:result.vars,res:result.rest,restricciones:arr1,variables:arr2});

    
    //e.preventDefault();
    
      

  }


render(){

    return(

<Router>
<Switch>    
    <Route exact path='/' render={() => <Cantidades funcion={this.agregarDatos} />}/>
    <Route exact path='/Condiciones' render={() => <Condiciones titulo={this.state}/>}/>
    
</Switch>
</Router>

)      

  }
}

export default App;





import React , {Component} from 'react';
import {render} from 'react-dom';



class Condiciones extends Component{

  constructor(){

    super();
    this.state ={
      vars:'',
      rest:'',
      variables:[],
      restricciones:[]
    };
  }
    

  
  

  componentDidMount(){
    
    /*const tit = this.props.match.params.titulo;*/
    /*this.setState(() => ({titulo: tit}))*/
    //this.setState({vars:this.props.titulo.vars,rest:this.props.titulo.res});    
    this.setState({vars:this.props.titulo.vars, rest:this.props.titulo.res});
    console.log(this.props.titulo);
    
  
  }

   
  

  render(){

    return(
        <div>
        <h1>{this.props.titulo.vars}</h1>
        </div>
        
      )

  }

}

export default Condiciones;








import React , {Component} from 'react';
import {render} from 'react-dom';



class Condiciones extends Component{

  constructor(){

    super();
    this.state ={
      vars:'',
      rest:'',
      variables:[],
      restricciones:[]
    };
  }
    

  
  

  componentDidMount(){
    
    /*const tit = this.props.match.params.titulo;*/
    /*this.setState(() => ({titulo: tit}))*/
    //this.setState({vars:this.props.titulo.vars,rest:this.props.titulo.res});    
    
    console.log(this.props.titulo);
    
  
  }

   
  

  render(){

    return(
      <div>
      <div className="container">
      <div className="row">
      <div className="col 4 push-s1 mx-auto">
      <div className="card">      
      <div className="card-content">
      <form>
      <div className="row">
        z= {this.props.titulo.variables.map(elem => {

                    return(
                      <div className="input-field col s4">
                      <input name="vars" type="text" placeholder={elem}/> +
                      </div>
                      )

                  })}
      </div>

      {this.props.titulo.restricciones.map(el => {
      return(
      <div className="row">

    {this.props.titulo.variables.map(elem => {

                    return(
                      <div className="input-field col s4">
                      <input name="vars" type="text" placeholder="cantidad de variables"/>
                      </div>
                      )

                  })}
        </div>
        )
      }
              )}    
    
    </form>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    )
    
    

  }

}

export default Condiciones;




















<div>
      <div className="container"> 
          <div className="row">
            <div className="col 4 push-s4 mx-auto">
            
              <div className="card">
                <div className="card-content">
                  <form onSubmit={this.agregarDatos}>
                    <div className="row">
                      <div className="input-field col s12">
                        <input name="vars" onChange={this.handleChange} type="text" placeholder="cantidad de variables" value={this.state.vars}/>
                      </div>
                    </div>
                    <div className="row">

                      <div className="input-field col s12">
                        <input name="rest" onChange={this.handleChange} type="text" placeholder="cantidad de restricciones" value={this.state.rest}/>
                      </div>
                      
                      
                        <Link to="/Condiciones">
                        <button type="submit" onClick={()=>this.agregarDatos()} className="btn btn-light-blue darken-4">OK</button>
                        </Link>
                      
                      
                     
                    </div>                    
                  </form>
                  
                </div>
              </div>

            </div>
          </div>  
    </div>
    </div> 