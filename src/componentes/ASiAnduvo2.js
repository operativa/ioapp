import React , {Component} from 'react';
import {render} from 'react-dom';
import {Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom';
import Condiciones from './Condiciones';
import App from './App';

var styles2 = {

  position: 'relative',
  left: '50%', 
  top:'30%',
  transform: 'translate(-50%, -50%)',
  width:'100%',

}

class Cantidades extends Component{

 
  constructor(){

    super();
    this.state={

      vars:'',
      rest:'',
      restricciones:[],
      variables:[]
      
    }

    

    this.handleChange = this.handleChange.bind(this);
    this.agregarDatos = this.agregarDatos.bind(this);
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

  agregarDatos(){
    var arr1 = [];
    var arr2 = [];
    //console.log(this.state);
    arr1[0] = {1:'R'+(i+1),2:''}
    for(var i=1; i<Number(this.state.rest);i++){
      
    arr1[i] = {1:'R'+(i+1),2:'+'}



    }

    for(var j=0; j<Number(this.state.vars);j++){
      arr2[j] = 'X'+(j+1) ;
    }
    this.setState({variables:arr2,restricciones:arr1});    
    
    //e.preventDefault();
    
      

  }
  
      
    

  

  render(){
    
    return(
  
<Router>
  <div>
      <div className="container p-4">
  <div className="row">

    <div className="col-md-4 mx-auto">
    <div className="card" style={styles2}>
      <div className="card-body">

        <form onSubmit={this.agregarDatos}>      
           
            <input type="text" name="vars" onChange={this.handleChange} className="form-control" placeholder="Variables" />                   
                      
                     
            <input type="text" name="rest" onChange={this.handleChange} className="form-control" placeholder="Restricciones"  />
                      
                      
          <div className="form-group">
            <Link to="/Condiciones">
            <button onClick={() => this.agregarDatos()} className="btn btn-success btn-block">
              ok
            </button>
            </Link>
          </div>

        </form>

      </div>

    </div>  
    
     
    </div>

  </div>
</div>
    </div> 

    <Switch>
    <Route exact path='/Condiciones' render={() => <Condiciones titulo={this.state}/>}/>
    </Switch>

    </Router>


)
  

}

}


export default Cantidades;












import React , {Component} from 'react';
import {render} from 'react-dom';

var styles = {

  width:'10%',
  display:'inline-block', 
  margin:'10px', 
  
};

var styles2 = {

  position: 'relative',
  left: '50%', 
  top:'30%',
  transform: 'translate(-50%, -50%)',
  width:'100%',

}

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
  <div className="container p-4">
  <div className="row">

    <div className="col-md-4 mx-auto">
    <div className="card" style={styles2}>
      <div className="card-body">

        <form>
          
          
          {"Z = "}
            
          {this.props.titulo.variables.map(elem => {

                    return(
                       
                      <div style={styles}> 
                      <input type="text" name="valor_Z1" className="form-control" placeholder={elem} />
                      </div>
                      )

                  })}
            

      {this.props.titulo.restricciones.map(el => {
      return(
      <div>

      {"R = "}

      {this.props.titulo.variables.map(elem => {

                    return(
                      
                     <div style={styles}>
                      <input type="text" name="valor1_R3" className="form-control" placeholder={elem}  />
                      </div> 
                      
                      )

                  })}
        </div>
        )
      }
              )} 
            
            
           
            
            
          
            
            
             
            
            
            
            
          
          
          
          <div className="form-group">
            <button className="btn btn-success btn-block">
              ok
            </button>
          </div>

        </form>

      </div>

    </div>  
    
     
    </div>

  </div>
</div>
    )
    
    

  }

}

export default Condiciones;