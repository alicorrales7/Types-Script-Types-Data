class Empleado{

    //(prop) genera el codigo completo de get and set
    private _nombre : string;
    public get getNombre() : string {
        return this._nombre;
    }
    public set setNombre(v : string) {
        this._nombre = v;
    }

    constructor(nombre:string){
        this._nombre=nombre;
    }
    
}

let empleado = new Empleado("Julian")

empleado.setNombre = "Nuevo Julian"

console.log(empleado.getNombre)