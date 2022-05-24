class Person{

    lastName:string;
    age:number;
    date:Date;

    constructor(public name:string, lastName:string, age:number){
        this.name = name,
        this.lastName = lastName,
        this.age = age
        
    }
    
}

let person = new Person("Ali","Corrales",26);
console.log(person)


