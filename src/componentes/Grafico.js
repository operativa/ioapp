import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';
//import {Link} from 'react-router';
import d3 from "d3";

import {Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom';
import Condiciones from './Condiciones';

window.d3 = d3;
const functionPlot = require("function-plot");


let nerdamer = require('nerdamer');
require('nerdamer/Algebra.js');
require('nerdamer/Calculus.js');
require('nerdamer/Solve.js');






//PRIMERO MODELO EL CASO PARA CUANDO SON TODOS <= (menor o igual)..

var funciones = {fun0: '3*x', fun1: 'x+5', fun2: '15-7x'};

/*
var fun0 = '3*x';
var fun1 = 'x+5';
var fun2 = '6';
*/

//Obtengo los puntos de intersección de las funciones con el eje coordenado X
var funcionesCant = 3;
var i;
var j;
//var intersectX;
var intersectY;
var eq1;
var eq2;
//var xVal;
var yVal;
var queuex = [];
var queuey = [];
var intersecciones = [];
//var arr = {};
for (i=0; i < funcionesCant; i++) {

  eq1 = "fun" + i;
  intersectY = nerdamer(funciones[eq1], {x: 0});
  yVal = eval(intersectY.toString());
  queuex.push(0);
  queuey.push(yVal);

  //intersecciones.concat(eq1: []);
  intersecciones[eq1] =[];
  intersecciones[eq1].push([0,yVal]);
  //intersecciones[eq1].push(0);

  //arr[eq1] = [0, yVal];
  //intersecciones.push(arr[eq1]);

}

console.log("EL ARRAY ASOCIATIVO TIENEEEEE:");
console.info(intersecciones);
console.log(intersecciones.toString());




//OBTENGO LOS PUNTOS DE INTERSECCION DE LAS FUNCIONES
for (i=0; i < funcionesCant; i++) {
  for (j=0; j < funcionesCant; j++) {

    if (i != j) {
      console.log("paso "+ i);
      eq1 = "fun" + i;
      eq2 = "fun" + j;

      console.log(eq2);

      var intersectX = nerdamer.solve( funciones[eq1] + '=' + funciones[eq2], 'x');
      console.log("cosoooo " +intersectX.toString());
      var xVal = eval(intersectX.toString().slice(1, -1 ));
      console.log('x cosooooo = ' + xVal.toString());

      intersectY = nerdamer(funciones[eq1], {x: xVal});
      yVal = eval(intersectY.toString());
      console.log('y = ' + yVal.toString());

      queuex.push(xVal);
      queuey.push(yVal);

      intersecciones[eq1].push([xVal,yVal]);
      intersecciones[eq2].push([xVal,yVal]);

    }
  }
}



console.log("RESULTADO FINAAAAAAAAAAAL");
console.info(queuex);
console.info(queuey);



//Limpio los puntos de las colas repetidos o que no estan en el primer cuadrante
var tempX;
var tempY;
var tempX2;
var tempY2;

for (i=0; i < queuex.length; i++) {
  tempX = queuex[i];
  tempY = queuey[i];
  for (j=0; j < queuex.length; j++) {
    if (i != j){
      tempX2 = queuex[j];
      tempY2 = queuey[j];
      if ( (tempX == tempX2) && (tempY == tempY2) || (tempY2 < 0) || (tempX2 < 0) ){
        queuex.splice(j, 1);
        queuey.splice(j, 1);

      }
    }
  }
}

console.log("RESULTADO MAAAAAS FINAAAAAAAAAAAL");
console.info(queuex);
console.info(queuey);




//LIMPIO LOS PUNTOS REPETIDOS EN EL ARRAY CON LAS INTERSECCIONES DE LAS FUNCIONES
//EN EL FOR USO funcionesCant PORQUE ESTABA TENIENDO PROBLEMAS PARA OBTERNER LA LONGITUD DEL 
//ARRAY ASOCIATIVO intersecciones
var iterar = [];
console.log("ESTO ES EL TAMAÑO DE INTERSECCIONES " + intersecciones.length);
for(i=0; i < funcionesCant; i++) {
  eq1 = "fun" + i;
  iterar[eq1] = (intersecciones[eq1].length);
}

console.log("ESTO TIENE EL ARRAY ITERAAAAAAAAR: ");
console.info(iterar);

//var iterar = intersecciones
var h;
var temp1;
var temp2;
for (i=0; i < funcionesCant; i++) {
  eq1 = "fun" + i;
  console.log("COSOOOOOOOUUUUADNSAUID " + iterar[eq1]);

  for (j=0; j < intersecciones[eq1].length; j++) {
    console.log("Esto tiene el array iterar["+eq1+"]");
    console.log(intersecciones[eq1][j]);

    

    for (h=0; h < intersecciones[eq1].length; h++) {
      
      console.log("TAMAÑO DEL ARRAY INTERSECCIONES");
      console.log(intersecciones[eq1].length);

      if (j != h){
        temp1 = intersecciones[eq1][j];
        temp2 = intersecciones[eq1][h];
        /*
        console.log("TU MAMA EN TANGA");
        console.log(intersecciones[eq1][j]);
        console.log(temp1);
        console.log(intersecciones[eq1][h]);
        console.log(temp2);
        */

        if ( (temp1 === undefined) || (temp2 === undefined) ){
          console.log("Instrucción fantasma.. (?");
        }else{
          if ( (temp1[0] == temp2[0]) || (temp1[0] < 0) || (temp1[1] < 0) ){
            //console.log("ENTRA COMO TU HERMANA");
            intersecciones[eq1].splice(j,1);
    
          }
        }
      }

    }

  }



console.log("EL ARRAY ASOCIATIVO TIENEEEEE.. FINAAAAAAL:");
console.info(intersecciones);
console.log(intersecciones.toString());



  tempX = intersecciones[eq1];
  tempY = queuey[i];
  for (j=0; j < queuex.length; j++) {
    if (i != j){
      tempX2 = queuex[j];
      tempY2 = queuey[j];
      if ( (tempX == tempX2) && (tempY == tempY2) || (tempY2 < 0) || (tempX2 < 0) ){
        queuex.splice(j, 1);
        queuey.splice(j, 1);

      }
    }
  }
}






//ORDENO LA COLA DE MENOR A MAYOR (YA QUE ESTOY TRABAJANDO LAS RESTRICCIONES DE MENOR O IGUAL "<=" )
var menorx = 999999;
var menory = 999999;
var finalqx = [];
var finalqy = [];
var k;
//USO LA VARIABLE ITERACIONES PORQUE LAS COLAS QUEUEX Y QUEUEY LAS VOY CORTANDO, POR LO QUE EN CADA 
//ITERACION EVALUARÍA UN VALOR DISTINTO DE PONER EL METODO queuex.length DIRECTAMENTE DENTRO DEL FOR..
//ENTONCES RESGUARDO SU VALOR Y ME ASEGURO QUE EN CADA ITERACION SIEMPRE COMPARO CON UN VALOR FIJO..
var iteraciones = queuex.length;

for (i=0; i < iteraciones; i++) {

  for (j=0; j < iteraciones; j++) {
    if (queuex[j] < menorx){
      menorx = queuex[j];
      menory = queuey[j];
    } else {
      if ((queuex[j] == menorx) && (queuey[j] < menory) ){
        menory = queuey[j];
      }
    }
  }

  for (k=0; k < queuex.length; k++) {
    if ( (menorx == queuex[k]) && (menory == queuey[k]) ){
      queuex.splice(k, 1);
      queuey.splice(k, 1);
    }
  }

  finalqx.push(menorx);
  finalqy.push(menory);
  menorx = 999999;
  menory = 999999;

}


console.log("RESULTADO MAAAAAS MAAAAAS FINAAAAAAAAAAAL");
console.info(finalqx);
console.info(finalqy);







//TOMO EL MENOR PUNTO (PAR ORDENADO), BUSCO EL SIGUIENTE MENOR (TRABAJO CON MENORES PORQUE ESTOY 
//MODELANDO EL CASO EN QUE TODAS LAS RESTRICCIONES SON DE MENOR O IGUAL "<=").. LO COMPARO CON 
//LOS PUNTOS QUE TENGO EN EL ARRAY INTERSECCIONES.. TOMO LA FUNCION QUE HACE ESE CORTE, Y BUSCO 
//SU SIGUIENTE PUNTO MENOR, Y ASI SUCESIVAMENTE.. 
//var pto = [];
var pto2;
var finalfinqx = [];
var finalfinqy = [];
menorx = 999999;
menory = 999999;


//for (i=0; i < finalqx.length; i++) {
  finalfinqx.push(finalqx[0]);
  finalfinqy.push(finalqy[0]);
  finalfinqx.push(finalqx[1]);
  finalfinqy.push(finalqy[1]);
  var pto = [finalqx[1], finalqy[1]];
  


  while ( (finalfinqx[0] != pto[0]) || (finalfinqy[0] != pto[1]) ){

    console.log("GATO, ENTRA AL WHILE");
    for (j=0; j < funcionesCant; j++) {
        eq1 = "fun" + j;

        for (k=0; k < intersecciones[eq1].length; k++) {
          pto2 = intersecciones[eq1][k];

          console.log("GATO, PTO TIENE ESTO");
          console.log(pto);
          console.log("GATO, PTO2 TIENE ESTO");
          console.log(pto2);

          if ( (pto[0] == pto2[0]) && (pto[1] == pto2[1]) ){

            console.log("GATO, ENTRA EN EL IF");

            intersecciones[eq1].splice(k,1);

            console.log("GATO, DESPUES DE CORTAR, A INTERSECCIONES LE QUEDA ESTO: ");
            console.info(intersecciones[eq1]);

            for (h=0; h < intersecciones[eq1].length; h++) {

              console.log("GATO, ENTRA EN EL FOR");

              if ((intersecciones[eq1][h][1] < menory)){
                menorx = intersecciones[eq1][h][0];
                menory = intersecciones[eq1][h][1];

                console.log("GATO, MENORX TIENE ESTO: " + menorx);
                console.log("GATO, MENORY TIENE ESTO: " + menory);

              } else {
                if ((intersecciones[eq1][h][1] == menory) && (intersecciones[eq1][h][0] > menorx) ){

                  console.log("GATO, ENTRA EN EL SEGUNDO IF");

                  menorx = intersecciones[eq1][h][0];
                }
              }

            }
            

          
          
          }
          



        }

        

    }

    //QUIERE DECIR QUE ALGO SALIÓ MAL, ENTONCES CORTO EL BUCLE
    if ((menorx == 999999) || (menory == 999999)) {
       break; 
    }
    console.log("GATO, PUSHEA MENORX: " + menorx);
    console.log("GATO, PUSHEA MENORy: " + menory);
    finalfinqx.push(menorx);
    finalfinqy.push(menory);
    pto = [menorx, menory];
    menorx = 999999;
    menory = 999999;

  }

//}









var  puntos = [];
var punto = [];
var cosox;
var cosoy;
var stringapasar = "";
for (i=0; i < finalfinqx.length; i++) {
  
  //console.log("El contenido de finalqx es: " + finalqx[i]);
  //console.log("El contenido de finalqy es: " + finalqy[i]);

  
  punto[0] = parseFloat(finalfinqx[i]);
  punto[1] = parseFloat(finalfinqy[i]);

  //console.log("El contenido de punto es: " + punto);
  puntos.push([punto[0],punto[1]]);
  
  
  if (i == (finalfinqx.length - 1)){
    
    punto[0] = parseFloat(finalfinqx[0]);
    punto[1] = parseFloat(finalfinqy[0]);
  
    //console.log("El contenido de punto es: " + punto);
    puntos.push([punto[0],punto[1]]);
    
  }
  



  //puntos.push.apply(puntos, [punto[0],punto[1]]);
  //console.log("El contenido de PUNTOS es: " + puntos);


  /*
  cosox = parseFloat(finalqx[i]);
  cosoy = parseFloat(finalqy[i]);
  stringapasar = stringapasar + "eval([" + cosox + ", " + cosoy + "]), "
  */

  /*
  if (i < (finalqx.length - 1)){
    stringapasar = stringapasar + ", ";
  }
  */

  /*
  if (i == (finalqx.length - 1)){
    
    cosox = parseFloat(finalqx[0]);
    cosoy = parseFloat(finalqy[0]);
    stringapasar = stringapasar + "eval([" + cosox + ", " + cosoy + "])"
    
  }
  */


}
console.log("EL CONTENIDO DE PUNTOS ES: ");
console.info(puntos);
console.log(puntos.toString());

//console.log("EL CONTENIDO DE STRINGAPASAR ES: ");
//console.info(puntos);
//console.log(stringapasar);
//console.info(stringapasar);

/*
var cosox = parseFloat(finalqx[0]);
var cosoy = parseFloat(finalqy[0]);
var stringapasar = "[" + cosox + "," + cosoy + "]"
*/
// = "[" + finalqx[0] + "," + finalqy[0] + "]";







//var intersectX = nerdamer.solve( fun0 + '=' + fun1, 'x');
//var x1 = eval(intersec1x.toString().slice(1, -1 ));
//console.log('x = ' + x1.toString());

//var intersec1y = nerdamer(fun1, {x: x1});
//var intersec1y = fun1.replace('x', intersec1x.toString());
//console.log('intersec1y = ' + intersec1y.toString());

//var y1 = eval(intersec1y.toString());
//console.log('y = ' + y1.toString());



//var queuex = [];
//var queuey = [];

//put value on end of queue
//queuex.push(x1);
//queuey.push(y1);
//queuex.push(3);

//console.log("valor en cola x: " + queuex[0]);

//Take first value from queue
//var value = queue.shift();


class Graf extends React.Component{

    render(){
            
      ReactDOM.render(null, document.getElementById('root'));
      //console.log("ejecuta inicio grafico.js");


      const root = document.querySelector("#root");

      /*
      var v1_r1 = document.querySelector("#valor1_R1");
      var v2_r1 = document.querySelector("#valor2_R1");
      */




      /*
      console.log('x1 dentro de la funcion es ' + x1);

      var x11 = parseFloat(x1.toString().slice(1, -1 ));
      console.log('x11 dentro de la funcion es ' + x11);
      var y11 = parseFloat(y1.toString().slice(1, -1 ));
      console.log('y11 dentro de la funcion es ' + y11);
      */

      functionPlot({
        //title: 'Tu Pendeja',
        target: root,
          xAxis: { 
        label: 'X1',
        domain: [-5, 5] },
        yAxis: { 
        label: 'X2',
        domain: [-1, 9] },
        grid: true,
        data: [
        

        {
          points: 
            //eval(puntos)

            //eval(puntos),
            //[0,0]
            /*
            eval("[0,0]"),
            eval("[0,5]"),
            eval("[0,0]")
            */

            //LE PASO UN ARRAY DE ARRAYS, POR ESO SE PRESCINDE DE LOS CORCHETES DESPUES DE "points:"
            puntos

            //[0, 0], [0, 5], [0, 6], [1, 6], [2, 6], [2.5, 7.5], [0, 0]
            //funciona
            //eval(stringapasar),

          //[2, 6],
          //[1,6],
           // [queuex.pop(), queuey.pop()],
            //[0, 5],
            //[0, 0],
            //[1, 1]
          ,
        color: "red",
        //closed: true,
          fnType: 'points',
          graphType: 'polyline',
        attr: {
          fill: "red"
        }
        },
        

        { fn: funciones["fun2"], color: 'orange', restriccion: "R3"
        


        },
        { fn: funciones['fun1'], color: 'green', restriccion: "R2" },
          {
            fn: funciones['fun0'],
          color: "blue",
          text: "3x",
          restriccion: "R1"

          }
        ],
        
        annotations: [
          {
            y: 0,
            x: 0,
            text: 'O'
          }, 
          {
            x: 0,
            y: 5,
            text: 'A'
          },
          {
            x: 1,
            y: 6,
            text: 'B'
          },
          {
            x: 2,
            y: 6,
            text: 'C'
          }
        ]
        
        
        
      });




      return (
          ''
      );
    }
}

//ReactDOM.render(el, document.getElementById('root'));
export default Graf;