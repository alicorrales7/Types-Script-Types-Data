interface Persona{
    
    sexo:string;
    edad:number

    Saludable(edad:number, sexo:string):boolean,
    Milenial(edad:number):string

}

class Cliente implements Persona{
    
    sexo: string;
    edad: number;
    idCLiente:number;
    miembro:boolean

    constructor(sexo:string, edad:number, idCliente:number, miembro:boolean){
        this.sexo = sexo,
        this.edad = edad,
        this.idCLiente = idCliente,
        this.miembro = miembro
    }

    Saludable(edad: number, sexo: string): boolean {
        let v:boolean = false;
        if(((edad+3)/2< 40 && sexo=="mujer") || ((edad+3)/2< 45 && sexo=="hombre") ){
            v = true
        }
        return v;
        
    }

    Milenial(edad: number): string {
        let t:string
        if(edad <= 26){
            t ="Ustdes es milenial"
        }else{
            t= "Ustdes es un viejo"
        }
        return t;
    }
}

let cliente = new Cliente("hombre", 20, 2, true)

console.log(cliente)
console.log("Usted es saludable" +" " + cliente.Saludable(25,"hombre"))
console.log(cliente.Milenial(12))