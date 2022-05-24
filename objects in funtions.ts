//Operator Spread 
//Array
let nombre:string[]= ["ali", "oriam","lucas"];
let number:number[]= [12,13,42,4,664,46,75];

let product = ["product 1", "movies", nombre, number];
console.log(product);

//Object

let book = {
    name: "Grem Book",
    category: "Drama",
    price: 60
}

let client = {
    name: "Jose Corrales",
    numberBuild: 4500,
    date: 12062022
}

let spread = {value: "unit 1", ...client, ...book
};

//Default values

 function getValues( object:{value1:string, value2?:number}){ // ? hace que el valor no sea obligatorio
    var {value1, value2} = object;
    console.log(value1);
    console.log(value2);

    object.value1="Ali";
    object.value2=26;
    console.log(value1);
    console.log(value2);

    return console.log("esto son los valores de object"+ object.value1 + "+"+ object.value2);
}
 getValues({value1:"COralafajfl",value2:23})




