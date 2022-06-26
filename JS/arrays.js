//declaring an array
var cars=[];
//declaring and initializing arr
var cars=["BMW", "AUDI","HONDA", 1,2,4,true,undefined];
//printing an array
console.log(cars);

//accessing element in the array
console.log(cars[3]);
console.log(cars[0]);

//replacing elements
cars[3]="Mahindra";
console.log(cars[3]);

//adding elements in arr
cars[8]="Maruti";
console.log(cars);

//interview question
cars[23]="Hello";
console.log(cars.length);
console.log(cars);

//methods
cars.pop();
console.log(cars);
console.log(cars.length);

cars.push("Mustang");

//Unshift->add the element at the starting of arr
cars.unshift("TATA");
console.log(cars);

console.log(cars[0]);

//shift-> it remove element from starting of an arr
cars.shift();
console.log(cars);

