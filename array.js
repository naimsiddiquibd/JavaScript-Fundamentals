// Declear an array
var friendsAge = [11,13,12,14,17];
var fruitsName = ['Apple','Banana','Mango'];
console.log(friendsAge);

// Count array's elements
var vowels = ['a','e','i','o','u'];
var vowelsCount = vowels.length;
console.log(vowelsCount);

// Array index (string)
var petName = ['Cat','Dog','Tiger','Lion','Enaconda'];
var lionIndex = petName.indexOf('Lion');
console.log(lionIndex);

// Array index (number)
var Number = [3,5,3,7,8,5];
var index = Number.indexOf(8);
console.log(index);

// Search for a unknown elements and get -1:
var fruits = ["Banana", "Orange", "Apple"];
var addFruits = fruits.indexOf("Lemon");
console.log(addFruits);

// Check array's element's position
var Number = [3,5,3,7,8,5];
var secondIndex = Number[2];
console.log(secondIndex);

// Replace elements in Array
var Number = [3,5,3,7,8,5];
var replacedNumber = Number[1]=4;
console.log(Number);

// Check the number of array elements
var fruits = ["Banana", "Orange", "Apple", "Mango"];
countFruits = fruits.length;
console.log(countFruits);

// The easiest way to add a new element to an array is using the push() method:
var fruits = ["Banana", "Orange", "Apple"];
fruits.push("Lemon");
console.log(fruits);

// The easiest way to remove a new element to an array is using the push() method:
var fruits = ["Banana", "Orange", "Apple"];
fruits.pop("Apple");
console.log(fruits);

// Remove 1st item from an array:
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift()
console.log(fruits);

// Add new items to the beginning of an array:
const Fruits = ["Banana", "Orange", "Apple", "Mango"];
Fruits.unshift("Lemon", "Pineapple");
console.log(Fruits);