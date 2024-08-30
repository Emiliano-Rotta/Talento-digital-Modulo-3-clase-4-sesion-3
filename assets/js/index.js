

// true && false && true && true //-->false
// true && true && true && true //-->true
// false || false || true ||false //-->true
// true || true || true ||true //-->true
// false || false || false ||false //-->false

//Condicionales
//Primera forma:
//Si la condicion es true lee el if sino continua..


// if(2 + 2 === 4){
//     console.log("PRIMERO")
// } else if (3 + 2 === 5){
//     console.log("SEGUNDO")
// } else{
//     console.log("TERCERO")
// }



//Si llueve y tienen paragua o se toman un taxi van al cine
//Si esta soleado o no tienen paragua ni taxi se quedan en casa..
// let clima = "lluvia"
// let paragua = false
// let taxi = true

// if(clima === "lluvia" && (paragua || taxi) ){
//     console.log("van al cine")
// } else {
//     console.log("Se quedan en casa")
// }




//Segunda Forma (no existe 2da alternativa)
// let clima = "lluvia"
// let paragua = true


// clima === "lluvia" && paragua && console.log("van al cine")


//Tercera forma
//ternario
//(condicion) ? (si es verdadero) : (si es falso)

// false ? console.log("primero") : console.log("segundo")

//Si llueve y tienen paragua o se toman un taxi van al cine
//Si esta soleado o no tienen paragua ni taxi se quedan en casa..
// let clima = "lluvia"
// let paragua = false
// let taxi = true

// clima === "lluvia" && (paragua || taxi) ? console.log("van al cine") : console.log("Se quedan en casa")


// if(clima === "lluvia" && (paragua || taxi) ){
//     console.log("van al cine")
// } else {
//     console.log("Se quedan en casa")
// }


//Si le pones ♥ a la foto y ademas seguis a la página.. participas por el premio..

// let foto = true
// let seguirPagina = true

// opcion 1 :if 
//opcion 2: &&   
//opcion 3: ?

// if (foto && seguirPagina) {
//     console.log("participas del premio")
// }

// foto && seguirPagina && console.log("participas del premio")
 
// foto && seguirPagina ? console.log("participas del premio") : ""