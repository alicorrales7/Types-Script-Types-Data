///<reference path ="empleado.ts"/>
class Empresa {
    nombre:string;
    ci:number;
    sub:boolean
     
    constructor(nombre:string, ci:number,sub:boolean){
        this.nombre = nombre,
        this.ci=ci,
        this.sub=sub
    }
    
    getData():string{
        
      return "El CLiente : Nombre" + this.nombre + ", CI " + this.ci  
    }


    IsSub(sub:boolean):string{
        let is:string;
        if(sub = true){
            is="Ya esta Subscrito"
        }else{
            is="No esta subscrito"}
            
            return is;
    }
}

let empresa = new Empresa("Ali" ,28429892859,true);

console.log(empresa.getData() + empresa.IsSub(true))

console.log(Empleado.Pay(20))


