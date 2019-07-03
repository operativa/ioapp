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
  top:'50%',
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
          
                   

            {
            for(var i = 0; i<=this.props.restricciones.length; i++){

              for(var j = 0; j<=this.props.variables.length; j++){

                                     

                  <input type="text" name={"Z"+elem} onChange={this.handleChange} className="form-control" style={styles} placeholder={elem} />
                

              }

          }
        }


        

      

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