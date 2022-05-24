class Persona {
    nombre:string;
    edad:number
    
}


class Estudiante extends Persona{

    constructor(public solapin:number, nombre:string, edad:number){
        super(nombre,edad);
        this.solapin = solapin
        
    }
}

class Trabajador extends Persona{

    constructor(public id:number, nombre:string, edad:number){
        super(nombre,edad);
        this.id = id
    }
}

let estudiante = new Estudiante(2,"Ali Corrales", 26);
let trabajador = new Trabajador(2,26,"wquoiuqwr")



console.log(estudiante);
console.log(trabajador.edad, trabajador.nombre)