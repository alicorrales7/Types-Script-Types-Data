class Calcular{
    static pi:number = 3.14432;

    
    private _area : number;
    public get area() : number {
        return this._area;
    }
    public set area(v : number) {
        this._area = v;
    }
    

    constructor(area:number){
        this._area = area
        
    }

    static obtenerArea(_area:number){
        return _area *_area * this.pi
    }
}

let valor:number = Calcular.obtenerArea(40)
console.log(valor)