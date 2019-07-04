import React , {Component} from 'react';
import {render} from 'react-dom';
import {Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom'
import Condiciones from "./Condiciones";
import Condiciones2 from "./Condiciones2";
import CantidadesSimplex from "./CantidadesSimplex";
import CantidadesGrafico from "./CantidadesGrafico";
import Tabla from "./Tabla";
import Grafico from "./Grafico";

const simplex = require('./simplex-solv');
const simplex2 = require('./simple-simplex');
const lpSolver = require('./lpSolver') ;

//var lobo;

var styles2 = {

  position: 'relative',
  left: '50%', 
  top:'50%',
  transform: 'translate(-50%, -50%)',
  width:'100%',

}


class App extends Component {  

constructor(props){

  super(props);
  this.state={

    vars:'',
    res:'',
    restricciones:[],
    variables:[],
    tablaFinal:[],
    cabecera:[],
    datosGraf:{},
    ptosOpt:[],
    valorOpt:""
    

  }
  
this.agregarDatos = this.agregarDatos.bind(this);
this.generarSimplex = this.generarSimplex.bind(this);
this.graficar = this.graficar.bind(this);

}

componentDidMount(){
    
    /*const tit = this.props.match.params.titulo;*/
    /*this.setState(() => ({titulo: tit}))*/
    console.log(this.state);
    console.log(this.props);
    console.log(simplex);


  }

agregarDatos(result){
    var arr1 = [];
    var arr2 = [];
    //console.log(this.state);
    arr1[0] = 'R'+1 
    for(var i = 1; i<Number(result.rest);i++){
      arr1[i] = 'R'+(i+1) ;
    }
    for(var j = 0; j<Number(result.vars);j++){
      arr2[j] = 'X'+(j+1) ;
    }
    this.setState({vars:result.vars,res:result.rest,restricciones:arr1,variables:arr2});
    //this.setState({vars:this.state.vars,res:this.state.rest,restricciones:arr1,variables:arr2});
    console.log(this.state);

    
    //e.preventDefault();     

  }


  generarSimplex(estado,vars,rest,prop){
    
    if(estado["tipoOpt"] == "max" ){
    var objetivo = "";
    for(var i=1; i<vars; i++){
      var aux = "ZX"+i;
      
      objetivo = objetivo + estado[aux]+"X"+i + " + "; 


    }

    objetivo = objetivo + estado["ZX"+vars]+"X"+vars;

    var arreglo = [];



    for(var z = 1; z<=rest; z++){

      var restric = "";

      for(var j = 1; j<vars; j++){
        var aux2 = "R"+z+"X"+j;
        
        restric = restric + estado[aux2]+"X"+j+" + ";

      }

      restric = restric + estado["R"+z+"X"+vars]+"X"+vars;
      restric = restric + " " + estado["tipoRestR"+z] + " " + estado["valorRestR"+z];

      arreglo[z-1] = restric;

    }
  var a = simplex(objetivo,arreglo);

  a = a.tableaus;

  var resguardoArrVars = a[a.length-1].variables;

  var b = [];
  //b[0] = resguardoArrVars;

  for(var x = 0; x<=(a[a.length-1].rows.length-1); x++){

    b[x] = a[a.length-1].rows[x]

  }

}
  console.log(objetivo);
  console.log(arreglo);
  console.log(a);
  console.log(b);
  
  

  var ecuaciones = [];
  var ecuacion = estado["tipoOpt"] + ": ";
  for(var i = 1; i<=vars; i++){

    ecuacion = ecuacion + estado["ZX"+i] + " " + "X" + i + " ";


  }

  ecuaciones[0] = ecuacion;

 
 
 for(var z= 1; z<=rest; z++){
   ecuacion = "";
  for(var j = 1; j<=vars; j++){

    ecuacion = ecuacion + estado["R"+z+"X"+j] + " " + "X" + j + " ";

  }

  ecuacion = ecuacion + estado["tipoRestR"+z] + " " + estado["valorRestR"+z]
  ecuaciones[z] = ecuacion;

 }
  
  console.log(ecuaciones);

  
  var result = lpSolver(ecuaciones);

  console.log(result);
  
  this.setState({

    vars:vars,
    res:rest,
    restricciones:prop.restricciones,
    variables:prop.variables,
    tablaFinal:b,
    cabecera: resguardoArrVars,
    

  });

  this.setState({ptosOpt: result["_tableau"].variables});
  this.setState({valorOpt: result.evaluation});



  }

  graficar(estado,vars,rest,prop){

    

    var ecuaciones = [];
  var ecuacion = estado["tipoOpt"] + ": ";
  for(var i = 1; i<=vars; i++){

    ecuacion = ecuacion + estado["ZX"+i] + " " + "X" + i + " ";


  }

  ecuaciones[0] = ecuacion;

 
 
 for(var z= 1; z<=rest; z++){
   ecuacion = "";
  for(var j = 1; j<=vars; j++){

    ecuacion = ecuacion + estado["R"+z+"X"+j] + " " + "X" + j + " ";

  }

  ecuacion = ecuacion + estado["tipoRestR"+z] + " " + estado["valorRestR"+z]
  ecuaciones[z] = ecuacion;

 }
  


  var a = {};

  for(var g = 1; g<=vars; g++){

    a["ZX"+g] = estado["ZX"+g];

  }

  

  for(var f = 1; f<=rest; f++){

    for(var y = 1; y <= vars; y++){

    a["R"+f+"X"+y] = estado["R"+f+"X"+y];

    }

    a["tipoRestR"+f] = estado["tipoRestR"+f];
    a["valorRestR"+f] = estado["valorRestR"+f];

  }

  a["tipoOpt"] = estado["tipoOpt"];


  console.log(ecuaciones);
  var result = lpSolver(ecuaciones);

  var w = result["_tableau"].variables
  a["ptosoptimos"] = w;
  a["valorOptimo"] = result.evaluation;

  this.setState({datosGraf: a });

  //console.log(result.bounded);
  console.log(a)
  console.log(this.state)
  
  }

  


render(){

    return(

<Router>

<nav className="light-red-darken-4">

          <div className="container">
            <a className="brand-logo" href="/">Programacion Lineal</a>            
          </div>

</nav>

 <div>
  <main className="index">

  <header className="masthead d-flex">
  <div className="container text-center my-auto">
  <div className="container p-4">
  <div className="row">

    <div className="col-md-4 mx-auto">
    <div className="card" style={styles2}>
      <div className="card-body">

        <div className="form-group">
            <Link to="/CantidadesSimplex">
            <button type="submit" className="btn btn-success btn-block">
              Simplex
            </button>
            </Link>
        </div>
        <div className="form-group">    
            <Link to="/CantidadesGrafico">
            <button  type="submit" className="btn btn-success btn-block">
              Grafico
            </button>
            </Link>
        </div>


      </div>

    </div>  
    
     
    </div>

  </div>
</div>
</div>
</header>
</main>
</div>

<Switch>
    <Route exact path='/'/>/>
    <Route exact path='/CantidadesSimplex' render={() => <CantidadesSimplex funcion={this.agregarDatos}/>}/>
    <Route exact path='/CantidadesGrafico' render={() => <CantidadesGrafico funcion={this.agregarDatos}/>}/>
    <Route exact path='/Condiciones' render={() => <Condiciones titulo={this.state} metodoSimp={this.generarSimplex}/>}/>
    <Route exact path='/Condiciones2' render={() => <Condiciones2 titulo={this.state} graf={this.graficar}/>}/>
    <Route exact path="/Tabla" render={() => <Tabla datos={this.state} />}/>    
	 <Route exact path="/grafico" render={() => <Grafico datos={this.state} />}/>    
</Switch>
</Router>

)      

  }
}

export default App;
