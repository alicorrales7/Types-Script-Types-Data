namespace Empleado{

    export function Pay(day:number):string{
        let res:string;
        if(day > 30){
            res = ("Se le debe pagar al empleado")
            }else{
                res = ("Aun no debe pagar al empleado")
            }
        
        
        return res;
    }
}