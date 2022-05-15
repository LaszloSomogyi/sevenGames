//source: https://javascript.info/array 

//declaration
let array = new Array(6);
//The call to new Array(number) creates an array with the given length, but without elements.
let array2 = [];
let fruits = ["apple", "lemon", "orange", "plum"];
//get an element
let apple = fruits[0]; 
// or, alternatively
let apple2 = fruits.at(0);
//replace an element
fruits[2] = "pear"; 
//add an element
fruits[4] = "cherry";
let arrayLength = fruits.length;
//An interesting thing about the length property is that it’s writable -> If we increase it manually,
//nothing interesting happens. But if we decrease it, the array is truncated, and the process is irreversible!
//So, the simplest way to clear the array is: arr.length = 0;


//An array can store elements of any type.
let arr = [ 'Apple', { name: 'John' }, true, function() { alert('hello'); } ];
//get the last element
let lastElement = fruits[fruits.length - 1];
//get the last element the shorter way:
let lastElement2 = fruits.at(-1);
let lastButOneElement = fruits.at(-2);
//Arrays in JavaScript can work both as a queue and as a stack. They allow you to add/remove elements both to/from the beginning or the end.
//stack-like operation - to remove an element from the end:
fruits.pop();
//stack-like operation - to add an element to the end:
fruits.push("cherry");
//queue-like operation - to remove an element from the beginning:
fruits.shift();
//queue-like operation - to add an element to the beginning:
fruits.unshift("apple");
//Methods push and unshift can add multiple elements at once!
//Methods push/pop run fast, while shift/unshift are slow.

//looping the classic way:
for(let i = 0; i < fruits.length; i++) {
    alert(fruits[i]);
}
//looping the compact way:
for(let fruit of fruits) {
    alert(fruit + ' and beer');
}

