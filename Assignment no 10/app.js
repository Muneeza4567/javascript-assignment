// >>>>>>>>>>>>>>> chapter 17-20 <<<<<<<<<<<<<<<<

// // Qno:1  Declare and initialize an empty multidimensional array. (Array of arrays)

// const array = [];

// // // Qno:2 Declare and initialize a multidimensional array representing the following matrix:

// const numbers = [[0,1,2,3],[1,0,1,2],[2,1,0,1]]

// for(let i = 0;i<numbers.length;i++){
//   for(let j=0;j<numbers[i].length;j++){
//     document.write(numbers[i][j]+" ")
//   }
//   document.write("<br />")
  
// }


// // Qno:3 Write a program to print numeric counting from 1 to 10

// for (let i = 1; i<=10; i++){
//     document.write(i + "</br>")
// }

// // Qno:4 Write a program to print multiplication table of any number using for loop. Table number & length should be
// // taken as an input from user.

// let tableNum = +prompt("Enter a number to show its multiplication table ")
// let length = +prompt("Enter length multiplication table ")
// document.write(`Multiplication table of ${tableNum} ` + "</br>")
// document.write(`Length ${length}` + "</br>")

// for(let i = 1; i<=length; i++)
// document.write(`${tableNum} x ${i} = ${tableNum*i}` + "</br>")

// // Qno:5 Write a program to print items of the following array using for loop:
// // fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”];

// const fruits = ["apple","banana","mango","orange","strawberry"]
// for (let i = 0; i<fruits.length; i++){
//     document.write(fruits[i] + "</br>")
// }
// document.write("</br>")

// for (let i = 0; i<fruits.length; i++){
//    document.write(`Element at index ${i} is ${fruits[i]} ` + "</br>")
// }


// Qno:6 Generate the following series in your browser. See example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15

// document.write("<h3> Counting </h3>")
// document.write("<br/>")
// for(let i = 1; i<=15; i++){
//     document.write(i +"<br/>")
// }

// // b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

// document.write("<h3> Reverse  </h3>");
// document.write("<br>");
// for(let i=10; i>=1; i--){
//     document.write(i+'<br>')
// }

// // c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20

// document.write("<h3> Even </h3>")
// document.write("<br>");
// for(var i=0;i<=20;i=i+2){
//     document.write( i + "<br>")};

// // d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19    

// document.write("<h3> Odd </h3>")
// document.write("<br>");
// for(var i=1;i<=20;i=i+2){
//     document.write( i + "<br>")};

// // e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// document.write("<h3> Series </h3>")
// document.write("<br>");
// for(var i=2;i<=20;i=i+2){
//     document.write( i + "k" + "<br>")};

//  // Qno: 7. You have an array
// // A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array.
// // After searching, prompt the user whether the given item is found in the list or not. Example:


// let A = ["cake", "apple pie", "cookie", "chips", "patties"];
// let userInput = prompt("Enter the item name");
// userInput = userInput.toLowerCase();
// let check = false;
// for (let i = 0; i < A.length; i++) {
//     if (userInput === A[i]) {
//       document.write(`${A[i]} is available at index ${i} in our bakery`)
//         check = true;
//     }
// }

// if (check === false) {
//   document.write(`We are sorry ${userInput} is not available in our bakery`)

// }

// // // 8. Write a program to identify the largest number in the given array.
// // // A = [24, 53, 78, 91, 12].


// const numbers = [105, 74, 122, 1, 90];
// let largestNum = numbers[0]; 

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > largestNum) {
//     largestNum = numbers[i];
//   }
// }
// document.write(`The largest number is ${largestNum}`)

// // 9. Write a program to identify the smallest number in the given array.
// // A = [24, 53, 78, 91, 12]


// const arrayItems = [24, 53, 78, 91, 12];
// let smallestNum =  arrayItems[0]; 

// for (let i = 0; i < arrayItems.length; i++) {
//   if (arrayItems[i] < smallestNum) {
//     smallestNum = arrayItems[i];
//   }
// }
// document.write(`The smallest number is ${smallestNum}`)

// // Qno:10  Write a program to print multiples of 5 ranging 1 to 100.

// for (let i=5; i<=100; i=i+5){
//   document.write(i +"</br>")
// }


// <<<<<<<<<<< Chapter 17-20 END <<<<<<<<<<<<<<<<