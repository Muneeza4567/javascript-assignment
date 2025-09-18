// >>>>>>>>>>>>>>>>>>> Chapter 6-9 MATH EXPRESSIONS <<<<<<<<<<<<<<<<<<<<<<<<<<<<

// // Qno: 1 Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:

//  let a = 10;
//     document.write(`Result <br>`)
//     document.write(`The value of a is:  ${a} <br>`);
//     document.write(`........................................<br><br>`);

//     document.write(`The value of ++a is: ${++a} <br>`);
//     document.write(`Now the value of a is: ${a} <br><br>`);

//     document.write(`The value of a++ is: ${a++} <br>`);
//     document.write(`Now the value of a is: ${a} <br><br>`);

//     document.write(`The value of --a is: ${--a} <br>`);
//     document.write(`Now the value of a is: ${a} <br><br>`);

//     document.write(`The value of a-- is: ${a--} <br>`);
//     document.write(`Now the value of a is: ${a} <br>`);

// // Qno: 2  What will be the output in variables a, b & result after execution of the following script:
// // var a = 2, b = 1;
// // var result = --a - --b + ++b + b--;
// // Explain the output at each stage:
// // --a;
// // --a - --b;
// // --a - --b + ++b;
// // --a - --b + ++b + b--;


// let a=2;
// let b=1;
// document.write("<h3>" + "Solving Complex Equation" + "</h3>");
// document.write(`The value of a is : ${a} <br>`);
// document.write(`The value of b is : ${b} <br>`);
// var result=  --a - --b + ++b + b--;
// document.write(`The result is ${result} <br><br>`);
// document.write(" <h3> Explainatory Solution </h3> <br>      " );
// document.write("a = 2, b = 1  <br/>");
// document.write("--a  -  --b  +  ++b  +  b-- <br/>");
// document.write(`--2 - --1 + ++1 + 1-- <br>`);
// document.write(`1 - 0 + 1 + 1 <br>`);
// document.write(`1+1+1 <br>`);
// document.write(`The result is 3`);


// // Qno:3 Write a program that takes input a name from user & greet the user.

// let userName = prompt("Whats your name")
// alert (`Asslamualikum  ${userName}`)

// Qno: 5  Write a program to take input a number from user & display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5 should be displayed by default.

// let num = prompt("Enter a number for the multiplication table:");

// if (num === "" || num === null) {
//   num = 5;
// } else {
//   num = Number(num);
// }
// for (let i = 1; i <= 10; i++) {
//   document.write(num + " x " + i + " = " + num * i + "<br>");
// }



// // Qno:6 6. Take
// // a) Take three subjects name from user and store them in 3 different variables.
// // b) Total marks for each subject is 100, store it in another variable.
// // c) Take obtained marks for first subject from user and stored it in different variable.

// let sub1 = prompt("enter your first sub name")
// let sub2 = prompt("enter your second sub name")
// let sub3 = prompt("enter your third sub name")


// let sub1Marks = 100
// let sub2Marks = 100
// let sub3Marks = 100

// let sub1ObtainedMarks = +prompt(`whats your marks in  ${sub1}`)
// let sub2ObtainedMarks = +prompt(`whats your marks in  ${sub2}`)
// let sub3ObtainedMarks = +prompt(`whats your marks in  ${sub3}`)

// let sub1Percent = (sub1ObtainedMarks / sub1Marks) * 100
// let sub2Percent = (sub2ObtainedMarks / sub2Marks) * 100
// let sub3Percent = (sub3ObtainedMarks / sub3Marks) * 100

// let totalMarks = sub1Marks + sub2Marks + sub3Marks;
// let totalObtainedMarks = sub1ObtainedMarks + sub2ObtainedMarks + sub3ObtainedMarks;
// let totalPercentage = sub1Percent + sub2Percent + sub3Percent;


// document.write(`
//     <table border="1">
//         <tr>
//             <th>
//             Subject</th>
//              <th>
//             Total Marks</th>
//              <th>
//             Obtained Marks</th>
//              <th>
//             Percentage</th>
//         </tr>
//         <tr>
//             <td>${sub1}</td>
//             <td>${sub1Marks}</td>
//             <td>${sub1ObtainedMarks}</td>
//             <td>${sub1Percent}%</td>
//         </tr>
//         <tr>
//             <td>${sub2}</td>
//             <td>${sub2Marks}</td>
//             <td>${sub2ObtainedMarks}</td>
//             <td>${sub2Percent}%</td>
//         </tr>
//         <tr>
//             <td>${sub3}</td>
//             <td>${sub3Marks}</td>
//             <td>${sub3ObtainedMarks}</td>
//             <td>${sub3Percent}%</td>
//         </tr>
//                 <tr>
//                 <td>${""}</td>
//             <td>${totalMarks}</td>
//             <td>${totalObtainedMarks}</td>
//             <td>${totalPercentage}%</td>
//         </tr>

//     </table>`)

