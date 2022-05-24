//Para establecer el debug hay que abilitar la opcion "sourceMap": true en el json

abstract class Animal{
    name:string;
    zise:number;

    private _country : string;
    public getCountry() : string {
        return this._country;
    }
    public setCountry(v : string) {
        this._country = v;
    }

    constructor(name:string, country:string, zise:number){
        this.name = name,
        this._country = country,
        this.zise = zise
    }

    saludable(zise:number):boolean{
        if(zise < 20){
            return false;
        }else{
            return true;
        }
    }

    abstract obtenerRuido(country:string):string;
}

class Gato extends Animal{
    pelo:string;
    colorOjos:string


    constructor(name:string, _country:string, zise:number, pelo:string, color:string){
        super(name,_country,zise);
        this.pelo=pelo;
        this.colorOjos=color
    }

    obtenerRuido(): string {
        let valor:string;
        if(gato.getCountry() == "eua"){
            valor = "Alto"
        }if (gato.getCountry() == "europa") {
            valor = "Medio"
        } else {
            valor = "Bajo"
        }
        return valor;    
        }

}


let gato = new Gato("PLain","eua",20,"claro","azul");
gato.setCountry("adfa")
console.log(gato.saludable(23))


console.log(gato.obtenerRuido())