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