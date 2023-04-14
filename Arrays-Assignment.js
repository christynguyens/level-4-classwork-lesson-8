//1 create an array of strings (has to be of at least length 10)
var arr = ["poodle", "lab", "pitbull", "chihuahua", "german shepherd", "boxer", "pug", "bulldog", "husky", "shar pei"];
//2 print out the second element in the array
console.log(arr[1]);
//3 print out the length of the array
console.log(arr.length);
//4 iterate over the array and print out each element
for(let i=0; i<arr.length; i++) {
   console.log(arr[i]);
}
//5 create a function that takes in a string and in the function iterate over each element in the array and for each element check if its equal to the parameter
  // if it is then return that string
  //else continue
function match (str) {
   for (let i=0; i<arr.length; i++) {
      if(arr[i] === str) {
         return arr[i];
      }
   }
}
console.log(match("pug"));

 //6 remove the last element from the array and then console.log the array
 //4 remove the last element from the array and then console.log the array
arr.pop();
console.log(arr);

 //7 remove the first element from the array and then console.log the array
 //5 remove the first element from the array and then console.log the array
arr.shift();
console.log(arr);

 //8 add a string to the end of the array and then console.log the array
 //6 add a string to the end of the array and then console.log the array
arr.push("shiba inu");
console.log(arr);
 // add a string to the beginning of the array and then console.log the array
 //7 add a string to the beginning of the array and then console.log the array
arr.unshift("hound");
console.log(arr);

 //8 create another array of 6 veggies 
    //create a variable called twoVeggies and set it equal to slicing the veggies array and getting the middle two elements
    //ex [1, 3, 4, 5, 7, 8] and getting the two middle elements would be [4, 5]
   var veggies = ["artichoke", "cabbage", "broccoli", "corn", "peas", "eggplant"];
   var twoVeggies = veggies.slice(2, 4);
   console.log(twoVeggies);

 //9 create another array of 4 fruits
    //create a fruits and veggies array and assign it to concatinating the veggies array above and the fruits array
    var fruits = ["cherry", "grape", "apple", "mango"];
    var fruitsAndVeggies = fruits.concat(veggies);
    console.log(fruitsAndVeggies);

 //10 get the index of one the fruits or veggies in your fruitsAndveggies array
 var one = fruitsAndVeggies.indexOf("grape");
 console.log(one);