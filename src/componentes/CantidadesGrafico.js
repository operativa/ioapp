import React , {Component} from 'react';
import {render} from 'react-dom';
import {Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom';
import Condiciones from './Condiciones';
//import Condiciones2 from './Condiciones2';
import App from './App';



var styles2 = {

  position: 'relative',
  left: '50%', 
  top:'50%',
  transform: 'translate(-50%, -50%)',
  width:'100%',

}

class Cantidades extends Component{

 
  constructor(){

    super();
    this.botonaso = React.createRef();
    this.state={

      vars:'2',
      rest:'',
      restricciones:[],
      variables:[]
      
    }

    

    this.handleChange = this.handleChange.bind(this);
    this.meterEvento = this.meterEvento.bind(this   );
    //this.props.funcion = this.props.funcion.bind(this);
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

  meterEvento() {this.botonaso.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        this.botonaso.click();
    }
})};

 

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
           
                      
                     
            <input type="text" name="rest" onChange={this.handleChange} className="form-control" placeholder="Restricciones"  />
                      
                      
          <div className="form-group">
            <Link to="/Condiciones">
            <button ref={this.botonaso} type="submit" onClick={() => this.props.funcion(this.state)} className="btn btn-success btn-block">
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
</header>
</main>
</div>
)
  

}

}


export default Cantidades;