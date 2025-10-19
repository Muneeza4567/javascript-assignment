// Chapter 21-25 String Methods //

// // Qno:1 Write a program that takes two user inputs for first and last name using prompt and 
// // merge them in a new variable titled fullName. Greet the user using his full name. 

// let firstName = prompt("Enter your first name")
// let lastName = prompt("Enter your last name")
// alert(`Assalamualikum ${firstName} ${lastName}`)


// // Qno:2  Write a program to take a user input about his favorite mobile phone model. 
// // Find and display the length of user input in your browser.

// let userMobile = prompt("Please enter your favorite mobile phone model")
// let length = userMobile.length

// document.write(`My favorite phone is: ${userMobile} <br> Lenght of string: ${length}`)


// // Qno:3 Write a program to find the index of letter “n” in the word “Pakistani” 
// // and display the result in your browser.

// let string = "Pakistani"
// let indexNo = string.indexOf("n")

// document.write(`String: ${string} <br> Index of 'n': ${indexNo} `)


// // Qno:4 Write a program to find the last index of letter “l” in the word “Hello World”
// //  and display the result in your browser.

// let string1 = "Hello world"
// let lastIndexNo = string1.lastIndexOf("l")
// document.write(`String: ${string1} <br> Last index of 'l': ${lastIndexNo}`)


// // Qno:5 Write a program to find the character at 3rd index in the
// // word “Pakistani” and display the result in your browser.

// let string2 = "Pakistani";
// let character = string2.charAt(3);
// document.write(`String: ${string2} <br> Character at index 3: ${character}`)


// // Qno:6 Repeat Q1 using string concat() method.

// let  userFirstName = prompt("Enter your first name")
// let  userLastName = prompt("Enter your last name")
// alert('Hello '+userFirstName.concat(userLastName))


// // Qno:7 Write a program to replace the “Hyder” to “Islam” in the
// // word “Hyderabad” and display the result in your browser.

// let city = "Hyderabad";
// let replace = city.replace("Hyderabad","Islamabad")

// document.write(`City: ${city} <br> After replacement: ${replace}`)


// // Qno:8 Write a program to replace all occurrences of “and” in the
// // string with “&” and display the result in your browser.
// // var message = “Ali and Sami are best friends. They play cricket and
// // football together.”;;


// let message = "Ali and Sami are best friends. They play cricket and football together."
// let replacement = message.replaceAll("and", "&")

// document.write(`Message: ${message} <br/><br> After replacement: ${replacement} `)


// // Qno:9 Write a program that converts a string “472” to a number
// // 472. Display the values & types in your browser.

// let string = "472";
// let num = Number(string)
// document.write(`Value: ${string} <br>`);
// document.write("Type:"  +typeof(string ) + "<br/>" )
// document.write(`Value: ${num} <br>`)
// document.write("Type:" + typeof(num) + "<br/>")


// // Qno:10  Write a program that takes user input. Convert and show the input in 
// // capital letters.

// let userInput = prompt("Please enter any word");
// let capitalize = userInput.toUpperCase()
// document.write(`User Input: ${userInput} <br/> Upper Case: ${capitalize}`)


// // Qno:11 Write a program that takes user input. Convert and
// // show the input in title case.

// let userInput = prompt("Please enter any word");
// let firstCharacter = userInput.slice(0,1)
// firstCharacter = firstCharacter.toUpperCase();
// let otherCharacters = userInput.slice(1);
// otherCharacters = otherCharacters.toLowerCase();
// let titleCase = firstCharacter + otherCharacters;

// document.write(`User Input: ${userInput} <br/> Title case: ${titleCase}`)


// // Qno:12 Write a program that converts the variable num to string.
// // var num = 35.36 ;
// // Remove the dot to

// let num = 35.36;
// let str = num.toString();
// let dotIndex = str.indexOf('.');
// let result = str.slice(0,dotIndex)+str.slice(dotIndex+1);
// document.write('Number :'+str+'<br>'+'Result ' +result);


// // Qno:13 Write a program to take user input and store username in a variable.
// //  If the username contains any special symbol among [@ . , !], prompt the user 
// // to enter a valid username. For character codes of [@ .


// let userInput=prompt("Enter your name: ");
// let charCode;
// for(let i=0; i<userInput.length; i++){
//     charCode=userInput.charCodeAt(i);
//      if(charCode===33||charCode===44||charCode===46||charCode===64){
//         alert("Please enter a valid username")
//      }
 
//      else{
//         alert(`Welcome ${userInput} `)
//      }

// }


// // Qno:14  Write a program to enable “search by user input” in an array. 
// // After searching, prompt the user whether the given item is found in the list or 
// // not.


// let arr = ["cake", "apple pie", "cookie", "chips", "patties"];
// let userInput = prompt("What do you want to order: ");
// userInput = userInput.toLowerCase();
// let check = false;
// for (let i = 0; i < arr.length; i++) {
//     if (userInput === arr[i]) {
//         document.write(arr[i] + " is available at index " + i + " in our bakery");
//         check = true;
//     }
// }
// if (check === false) {
//     document.write(`We are sorry.  ${userInput}  is not available in our bakery`);
// }


// // Qno:15 Write a program to take password as an input from user. The password must qualify these requirements: 
// // a. It should contain alphabets and numbers b. It should not start with a number c.
// //  It must at least 6 characters long.

// let password = prompt("Enter your password: ");
// let passwordLength = false;
// let passwordChar = false;
// let passwordInt = false;
// let passwordStart = true;

// // Checking for Alphabet
// for (i = 0; i < password.length; i++){
//     let charValue = password[i].charCodeAt(0);

//     // Checking for UpperCase Letters
//     if (charValue >= 65 && charValue <= 90 ){
//         passwordChar = true;
//     }

//     // Checking for LowerCase Letters
//     else if (charValue >= 97 && charValue <= 122 ){
//         passwordChar = true;
//     }
// }

// // Checking for Numbers
// for (i = 0; i < password.length; i++){
//     let charValue = password[i].charCodeAt(0);  
//     if (charValue >= 48 && charValue <= 57 ){
//         passwordInt = true;
//     }
// }

// // Checking for first letter
// let charValue = password.charCodeAt(0);
// if (charValue >= 48 && charValue <= 57 ){
//     passwordStart = false;
// }

// // Checking for Length
// if(password.length >= 6)
//     passwordLength = true;


// if(passwordChar === false || passwordInt === false || passwordLength === false || passwordStart === false){
//     alert("Enter valid Password");
// }

// else{
//     alert("Password Approved");
// }


// // Qno:16 Write a program to convert the following string to an array using string split method.
// //  var university = “University of Karachi”;

// let string = "University of karachi";
// let array = string.split("");
// for(let i= 0; i<string.length; i++){
//     document.write(array[i] + "<br/>")
// } 


// // Qno:17 Write a program to display the last character of a user input. 

// let userInput = prompt("write any word");
// document.write(`User Input: ${userInput} <br/> Last character of input ${userInput[userInput.length-1]}`)


// // Qno:18 You have a string “The quick brown fox jumps over the lazy dog”.
// //  Write a program to count number of occurrences of word “the” in given string.


// let str = "The quick brown fox jumps over the lazy dog";
// str = str.toLowerCase();
// let count = str.match(/the/g);
// let length = count.length;

// document.write(`Text: ${str} <br/> There are ${length} occurence(s) of word 'the'`)

// Chapter 21-25 End //
