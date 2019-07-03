import React , {Component} from 'react';
import {render} from 'react-dom';
import {Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom';

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
  width:'200%',

}

class Condiciones extends Component{

  constructor(){

    super();
    this.state ={
      vars:'',
      rest:'',
      variables:[],
      restricciones:[],
      tablaFinal:[]
    };

    this.handleChange = this.handleChange.bind(this);
  }
    

  
  

  componentDidMount(){
    
    /*const tit = this.props.match.params.titulo;*/
    /*this.setState(() => ({titulo: tit}))*/
    //this.setState({vars:this.props.titulo.vars,rest:this.props.titulo.res});    
    
    console.log(this.props.titulo);

    
  
  }

  handleChange(e){

    const {name,value} = e.target;
    console.log(this.state);
    this.setState({
      [name]:value

    })}

   
  

  render(){

    return(
  <div>
  <main className="index">

  <header className="masthead d-flex">
  <div className="container text-center my-auto">
  <div className="container p-4">
  <div className="row">

    <div className="col-md-4 mx-auto">
    <div className="card" style={styles2}>
      <div className="card-body">

        <form>
          
          
          {"Z = "}
            
          {this.props.titulo.variables.map(elem => {
                    
                    return(
                       
                      
                      <input type="text" name={"Z"+elem} onChange={this.handleChange} className="form-control" style={styles} placeholder={elem} />
                      
                      )



                  })


                } 

                <input type="text" name="tipoOpt" onChange={this.handleChange} className="form-control" style={styles} placeholder="TipoOpt" />

            

      {this.props.titulo.restricciones.map(el => {
      return(
      <div>

      {el+" = "}

      {this.props.titulo.variables.map(elem => {

                    return(
                        
                      
                      <input type="text" name={el+elem} onChange={this.handleChange} className="form-control" style={styles} placeholder={elem}  />
                      
                      
                      )

                     

                    


                  })}



 
<input type="text" name={"tipoRest"+el} onChange={this.handleChange} className="form-control" style={styles} placeholder="TipoRest"  />


<input type="text" name={"valorRest"+el} onChange={this.handleChange} className="form-control" style={styles} placeholder="valor"  />


        </div>
        )
      }
              )} 
            
            
           
            
            
          
            
            
             
            
            
            
            
          
          
          <Link to="/Tabla">
          <div className="form-group">
            <button onClick={() => this.props.metodoSimp(this.state,this.props.titulo.vars,this.props.titulo.res,this.props.titulo)} className="btn btn-success btn-block">
              ok
            </button>
          </div>
          </Link>

        </form>

      </div>

    </div>  
    
     
    </div>

  </div>
</div>
</div>
</header>
</main>
</div>
    )
    
    

  }

}

export default Condiciones;