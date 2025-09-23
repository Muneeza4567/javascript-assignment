// >>>>>>>>>>>>>>>> CHAPTER # 9-11 USER INPUT & CONDITIO NAL STATEMENT <<<<<<<<<<<<<<<<<<


// // Qno: 1 Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this:
// // “Welcome to city of lights”

// let cityName = prompt("Enter your city name ? ") 

// if (cityName === "karachi") {
//     alert("Welcome to city of lights");
// }

// else {
//     alert("Welcome")
// }


// // Qno:2 Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the
// // user is female, give the message: Good Morning Ma’am.

// let gender = prompt("Enter your gender");

// if (gender === "Male" || gender === "male") {
//       alert("Good morning sir")    
// }

// else if (gender === "female" || gender === "Female" ) {
//       alert(" Good Morning Ma’am")
// }


// // Qno:3  Write a program to take input color of road traffic signal from the user & show the message according to this table:

// let color = prompt("Enter the traffic color");

// if (color === "red" || color === "Red") {
//     alert("Must stop")
// }

// else if (color === "Green" || color === "green") {
//     alert("Move now")
// }

// else if (color === "yellow" || color === "Yellow") {
//     alert("Ready to Move")
// }

// // Qno:4 Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres,
// // show the message “Please refill the fuel in your car”

// let userFuel = +prompt("Remaining fuel")
//  if(userFuel<0.25){
//      alert("please refill your fuel in your car")
//  }


// 5. Run this script, & check whether alert message would be displayed or not. Record the outputs.
// Part A
// var a = 4; 
// if (++a === 5){ 
//     alert("given condition for variable a is true");
//     }

// Part B
// var b = 82;
// if (b++ === 83){
//     alert("given condition for variable b is false");
//     }

// // Part C
// var c = 12;
// if (c++ === 13){
//     alert("condition 1 is true");
//     }

// if (c === 13){ 
//     alert("condition 2 is true"); 
//     }

// if (++c < 14){ 
//     alert("condition 3 is true"); 
//     } 

// if(c === 14){ 
//     alert("condition 4 is true"); 
//     }

// // Part D
// var materialCost = 20000; 
// var laborCost = 2000; 
// var totalCost = materialCost + laborCost; 
// if (totalCost === laborCost + materialCost){ 
//     alert("The cost equals"); 
//     }

// // Part E
// if (true){ 
//     alert("True"); 
//     } 

// if (false){ 
//     alert("False"); 
//     }

// // Part F
// if("car" < "cat"){ 
//     alert("car is smaller than cat"); 
//     }


// // 5. Run this script, & check whether alert message would be displayed or not. Record the outputs.
// // Part A
// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true because it is pre-increment");
// }

// // Part B 
// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is false because it is post-increment");
// }

// // Part C
// var c = 12;
// if (c++ === 13) {
//     alert("This is wrong condition because it is post-increment");
// }
// if (c === 13) {
//     alert("This condition is right because upper value is post-increment so now it change 12 to 13");
// }

// if (++c < 14) {
//     alert("This condition is false because ++c increased the value to 14 before comparison, and 14 can never be less than 14. That’s why the condition is false.");
// }

// if (c === 14) {
//     alert("This is right condition because it is equal");
// }

// // Part D
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// // Part E 
// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }

// // Part F
// if("car" < "cat"){
// alert("car is smaller than cat because value of 'T' of cat grether then value of 'R' of car  ");
// }


// // Qno:6 Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting
// // percentage on your page. Take percentage & compute grade as per following table:

//     let totalMarks = 300;

//     let sub1 = +prompt("Enter marks of Subject 1:");
//     let sub2 = +prompt("Enter marks of Subject 2:");
//     let sub3 = +prompt("Enter marks of Subject 3:");

//     let obtainedMarks = sub1 + sub2 + sub3;

//     let percentage = (obtainedMarks / totalMarks) * 100;
//     percentage=percentage.toFixed(2);


//     let grade, remarks;
//     if (percentage >= 80) {
//       grade = "A-one";
//       remarks = "Excellent";
//     }
//      else if (percentage >= 70) {
//       grade = "A";
//       remarks = "Good";
//     }
//      else if (percentage >= 60) {
//       grade = "B";
//       remarks = "You need to improve";
//     }
//      else {
//       grade = "Fail";
//       remarks = "Sorry";
//     }

//     document.write("<h2>Marks Sheet</h2>");
//     document.write(`Total Marks: ${totalMarks} </br>`);
//     document.write(`Marks Obtained: ${obtainedMarks} </br>`);
//     document.write(`Percentage ${percentage} %  </br> `)
//     document.write(`Grade: ${grade} <br>`);
//     document.write(`Remarks: ${remarks} `);


// // Qno:7 Guess game:
// // Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number.

// let secret = 9;
// let guessNumber = +prompt (`Guess the number
// between 1-10`)

// // a. If user guesses the same number, show “Bingo! Correct answer”.
// if (guessNumber === secret) {
//    alert("Bingo! Correct answer") 
//    alert("Bingo! Correct answer")
// }

// // b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.
// else if (guessNumber === ++secret) {
//     alert("Close enough to the correct answer")
// }

// else{
//     alert("Sorry your answer is not correct ")
// }


// //  Qno:8 Write a program to check whether the given number is divisible by 3. Show the message to the
// // user if the number is divisible by 3.

// let num=+prompt('Enter number to check number is divisible by 3 or not');
// if(num % 3===0){
//     alert(num+' is divisible by 3')
// }
// else{
//     alert(num+' is not  divisible by 3')
// }

// // Qno:9 Write a program that checks whether the given input is an even number or an odd number.

// var num=+prompt('Enter number to check number is even or odd');
//  if(num % 2===0){
//         alert(num+' is even')
//      }
//      else{
//          alert(num+' is odd')
//      }


// // Qno:10 Write a program that takes temperature as input and shows a message based on following criteria
// // a. T > 40 then “It is too hot outside.”
// // b. T > 30 then “The Weather today is Normal.”
// // c. T > 20 then “Today’s Weather is cool.”
// // d. T > 10 then “OMG! Today’s weather is so Cool.”


// let temperature = +prompt("Enter your city temperature")

// if (temperature>40) {
//     alert("It is too hot outside.");
// }
// else if (temperature>30) {
//     alert("The Weather today is Normal.");
// }
// else if (temperature>20) {
//     alert("Today’s Weather is cool.");
// }
// else {
//     alert("OMG! Today’s weather is so Cool.");
// }

// // Qno:11. Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:
// // a. First number
// // b. Second number
// // c. Operation (+, -, *, /, %)
// // Compute & show the calculated result to user.

// let firstNumber = +prompt("Enter your first number")
// let secondNumber = +prompt("Enter your secound number")

// let operation = prompt(`Choose your operation 
// (+, -, *, /, %)`) 

// let operation = prompt(`Choose your operation
// (+, -, *, /, %)`)


// if (operation === "+") {
//     alert(firstNumber+secondNumber)
// 
// else if (operation === "-") {
//     alert(firstNumber-secondNumber)
// }
// else if (operation === "*") {
//     alert(firstNumber*secondNumber)
// }
// else if (operation === "/") {
//     alert(firstNumber/secondNumber)
// }
// else{
//     alert(firstNumber%secondNumber)

// }
// }



// >>>>>>>>>>>>>>>> CHAPTER # 9-11 END <<<<<<<<<<<<<<<<<<