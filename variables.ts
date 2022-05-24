//Imprimir en consola
console.log('Hola desde el archivo ');

//string
let variable1:string = "Element ";
console.log(variable1);

//number
let variable2:number = 1284979;
console.log(variable2);



//Array
let lista:string[] = ["Ali", "Oriam", "Lucas"];

//Array modifacate, can have many strings or one
var arrayM:string[]|string;
arrayM=['MyDocumemnt'];
arrayM=['D/:','C/:','MyDocument'];
console.log(arrayM);

//Tuples
let personsa: [string[], number, string, string[]];
personsa = [['Ali','Corrales'],26, 'masculino',['musica', 'deporte']];
var [[nombre],edad, sexo, [gustos]] = personsa

console.log(nombre);
console.log(gustos);




//for
for (const iterator of lista ) {
    console.log(iterator);
}

//boolean
let estadoCivil:boolean = false;
estadoCivil = true;

//enum
enum Color {Blue, Yellow, Black, Pink};
console.log(Color.Black)

//if & else
if(estadoCivil){
    console.log('La persona es casado');
}else{
    console.log('La persona es soltera');
}

//funtion
estadoCivil = ObtenerEstadoCivil();
function ObtenerEstadoCivil(){
    return true;
}

//assertions ,  castear el valor de una variable
let valor = "Hola soy una cadena"
let resultado:number = (<string> valor).length; //convierto valor en un number para trabajar con el leng de la variable string
console.log(valor + resultado);