class Estudiante{
    private nombre:string;
    private ci:number;
    curso:string;
    estado:boolean

    constructor(nombre:string,ci:number,curso:string, estado:boolean){
        this.nombre = nombre,
        this.ci = ci,
        this.curso = curso,
        this.estado= estado
    }

    obtenerci():number{
        return this.ci
    }
    obtenerNombre():string{
      return  this.nombre
    }
}

class Empleado extends Estudiante{
    carnet:number = this.obtenerci()

    constructor(nombre:string,carnet:number,curso:string,estado:boolean,public salario:number,public centro:string){
        super(nombre,56,curso,estado);
        this.salario=salario,
        this.centro=centro
    }
}

let empleado = new Empleado("Ali Corrales",95061230966,"segundo",true,40000,"produccion");
let a:string = empleado.obtenerNombre();

console.log(empleado,a)