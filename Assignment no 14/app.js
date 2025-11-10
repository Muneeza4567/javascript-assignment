// // CHAPTER 35-38 FUNCTION // // 

// // Qno:1 
// //  Write a function that displays current date & time in your browser.

// function tellTime(){
//     let today = new Date ();
//     document.write(today)
// }
// tellTime()


// // Qno:2 
// // Write a function that takes first & last name and then it greets the user using his full name.

// function greets (){
//     let firstName = prompt("Enter your first name")
//     let lastName = prompt("Enter your last name ")
//     alert(`Assalamualikum ${firstName} ${lastName}`)
   
// }
// greets()

// // Qno:3 
// // Write a function that adds two numbers (input by user) and returns the sum of two numbers.


// function sum () {
//     let firstNumber = +prompt("Enter your first number")
//     let secondNumber =+ prompt("Enter your second number")
//     let result = firstNumber+secondNumber
//     alert(`The sum of ${firstNumber} and ${secondNumber} is : ${result}`)
    
// }

// sum();

// // Qno:4
// // Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser

// let firstNum = +prompt("Enter first number")
// let secondNum = +prompt("Enter second number ")
// let operator = prompt("Enter operator")

// function calculater (num1,operator,num2) {
//     if (operator === "+") {
//         let result = num1+num2
//         alert(result)
//     }
//     else if (operator === "-") {
//         let result = num1-num2
//         alert(result)
//     }
//      else if (operator === "*") {
//         let result = num1*num2
//         alert(result)
//     }
//      else if (operator === "/") {
//         let result = num1/num2
//         alert(result)

//     }
//     else {
//         alert("Invalid operator")
//     }
// }
// calculater(firstNum,operator,secondNum)


// // Qno:5 
// // Write a function that squares its argument. 

// function squares(num) {
//     let squares = num**2;
//     alert(squares)

// }
// let number=+prompt('Enter number to be square')
// squares(number);

// Qno:6
// Write a function that computes factorial of a number

// function factorial() {
//     let num = +prompt("Enter number ")
//     let fact = 1;
//     if (num === 1 || n === 0) {
        
//     }
//     else{
//         for (let i = num; i >= 1; i-- ){
//             fact = fact * i 
//         }
//     }

//     document.write(fact)
// }

// factorial()



// miss
// function factorial(){
// var n = +prompt('enter n')
// var fact = 1;
// if (n === 1 || n === 0) {
// }
// else {
//     for (var i = n; i >= 1; i--) {
//         fact = fact * i
//     }
// }
// document.write(fact)
// }
// factorial()



// // Qno:7
// // Write a function that take start and end number as inputs & display counting in your browser.


// function counting(start,end) {
//     for (let i = start; i <= end; i++){
//         document.write(i + "<br/>")
//     }
    
// }

// let start = +prompt("Enter start number for counting")
// let end = +prompt("Enter end number for counting")
// counting(start,end);


// Qno:8 
// Write a nested function that computes hypotenuse of a right angle triangle. 
// function calculateHypotenuse(base,perpendicular){

// function calculateHypotenuse(base, perpendicular) {
//     var base , perpendicular;


//     function calculateSquare(num) {
//         num = num * num;
//         return  num;
//     }

//     base = calculateSquare(base);
//     perpendicular = calculateSquare(perpendicular);
//     let hyp = base  + perpendicular;

//     return hyp;

// }


// let base = +prompt('Enter base of right angle triangle');
// let perpendicular = +prompt('Enter perpendicular of right angle triangle');
// let hyp = calculateHypotenuse(base, perpendicular)
// alert('The hypotenuse of right angle triangle is ' + hyp)


// // Qno: 9 
// // Write a function that calculates the area of a rectangle.      A = width * height

// function areaCalculate(width,height) {
//     let A = width*height;
//     return A;

// }
// let width = +prompt("Enter width ");
// let height = +prompt("Enter height ");
// let result = areaCalculate(width,height);
// document.write(result)


// // Qno:10
// // Write a JavaScript function that checks whether a passed string is palindrome or not?

// function palindrome(string) {
//     let check = " ";
//     for(let i = string.length -1; i>=0 ; i--){
//         check +=string[i]
//     }
//     if (string === check) {
//         alert(string + " is a palindrome word")
//     }
//     else{
//         alert(string + " is a not palindrome")
//     }
// }
// let str = prompt("write any word");
// palindrome(str)


// Qno: 11
// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.


// function UpperCase(str) {
//     let arr = str.split(' ');
//     let newArray = [];
//     for (let i = 0; i < arr.length; i++) {
//         newArray.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1))
//     }
//     return newArray.join(' ')

// }

// let str = 'the quick brown fox'
// let result = UpperCase(str)
// document.write(`EXAMPLE  SRING:${str} <br/>`)
// document.write(`EXAMPLE  SRING: ${result} <br/>`)


// Qno: 12
// Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 


// function longest(str) {
//     let split = str.split(' ');
//     let first = split[0].length;
//     for (let i = 0; i < split.length; i++) {
//         if (first < split[i].length) {
//             first = split[i]
//         }
//     }
//     return first;
// }
// let str = 'Web Development Tutorial ';
// let result = longest(str);
// document.write(`EXAMPLE  SRING:${str} <br/>`)
// document.write(`EXAMPLE  SRING: ${result} <br/>`)


// // Qno:13
// // Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.  Sample arguments : 'JSResourceS.com', 'o' .

// function count(str, letter) {
//     let find=0;   
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === letter) {
//             find += 1;
//         }
//     }
//     return find
// }
// let str = 'JSResourceS.com';
// let letter = 'o'
// let result = count(str, letter);
// document.write(`The occurence of o in this string is  ${result}`)



// Qno:14 
//14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".

// Circumference of circle = 2πr
// Area of circle = πr2

// ANSWER:


// function calcCircumference(value){
//     let circumference=2*3.141*value;
//     return circumference
// }
//  function calcArea(value){
//      let area=3.141*(value*value);
//      return area
//  }
// let radius=+prompt('Enter radius of circle ');
// let circumference=calcCircumference(radius);
// let area=calcArea(radius);
// document.write(`The Circumference of circle is ${circumference} <br> `)
// document.write(`The Area of circle is ${area} <br>` )


// END OF CHAPTER 35-38 // 