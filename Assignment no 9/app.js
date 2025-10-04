// // <<<<<<<<< Chapter 14-16 Arrays >>>>>>>>>>

// // Qno:1 Declare an empty array using JS literal notation to store student names in future. 

// let studentsNames1=[];

// // Qno:2  Declare an empty array using JS object notation to store student names in future.

// let studentName2 = new Array();

// // Qno:3 Declare and initialize a strings array.

// const cities = ["Lahore ", " Islamabad "," karachi ", " peshawar"];
// document.write("<br/>")
// document.write(`String Array:${cities} <br/> <br/>`)

// // Qno:4 Declare and initialize a numbers array.

// const numbers = [10,20,30,40,50]
// document.write(`Number Array: ${numbers}`)

// // Qno:5   Declare and initialize a boolean array. 

// const boolean = [true, false]
// document.write(`boolean Array: ${boolean}`)

// // Qno:6  Declare and initialize a mixed array. 

// const data = ["Muneeza", 16, true, false]
// document.write(`Mixed Array: ${data}`)

// Qno:7 Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD).

// let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PHD"];
// let count = 0;
// let i = 0;

// document.write("Qualification" + "<br/>");
// document.write(++count + ") " + qualifications[i++] + "<br/>");
// document.write(++count + ") " + qualifications[i++] + "<br/>");
// document.write(++count + ") " + qualifications[i++] + "<br/>");
// document.write(++count + ") " + qualifications[i++] + "<br/>");
// document.write(++count + ") " + qualifications[i++] + "<br/>");
// document.write(++count + ") " + qualifications[i++] + "<br/>");
// document.write(++count + ") " + qualifications[i++] + "<br/>");
// document.write(++count + ") " + qualifications[i++] + "<br/>" + "<br/>" + "<br/>");


// // Qno:8 Write a program to store 3 student names in an array.Take another array to store score of these three students.
// // Assume that total marks are 500 for each student, display the scores & percentages of students like: 

// let students = ["Muneeza","Hanish","Anaya"]
// let score = [450,400,350]
// let total = 500;

// percentage1=(score[0]/total)*100;
// percentage2=(score[1]/total)*100;
// percentage3=(score[2]/total)*100;

// document.write(`Score of ${students[0]} is ${score[0]}. Percentage: ${percentage1} % <br> `)
// document.write(`Score of ${students[1]} is ${score[1]}. Percentage: ${percentage2} % <br> `)
// document.write(`Score of ${students[2]} is ${score[2]}. Percentage: ${percentage3} % <br> `)


// // 9. Initialize an array with color names. Display the array elements in your browser.

// let colors = [];

// // a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array.

// let userColor=prompt("Enter your desire color to be added in the beginning of the array");
// colors.unshift(userColor);
// document.write(`Updated array : ${colors} <br>`)

// // b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. 

// let userColorEnd=prompt("Enter your desire color to be added at the end  of the array");
// colors.push(userColorEnd);
// document.write(`Updated array : ${userColorEnd} <br>`)


// // c. Add two more color to the beginning of the array. 

// let addColor1=prompt('Add first color to the beginning of the array');
// let addColor2=prompt('Add second color to the beginning of the array');
// colors.unshift(addColor1,addColor2)
// document.write(`Updated array: ${colors} <br>`);

// // d. Delete the first color in the array. 

// colors.shift();
// document.write(`Updated array : ${colors} <br>`)

// // e. Delete the last color in the array

// colors.pop();
// document.write(`Updated array : ${colors} <br>`)


// // f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index.

// let index=+prompt("At which index no you want to add color");
// let colorName=prompt("And which color ?");
// colors.splice(index,0,colorName);
// document.write(`Updated array : ${colors} <br>`)

// // g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete

// index=+prompt(" At which index you want to delete color" );
// let deleteCount=+prompt("How many colors do you want to delete?");
// colors.splice(index,deleteCount);
// document.write(`Updated array : ${colors}`)

// // Qno:10 Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method. 

// let scores = [320,230,480,120]
// document.write(`Scores of students : ${scores} <br>`)
// document.write(`Ordered Scores of Students : ${scores.sort() } <br> `)

// // 11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array. 

// let  cityNames=["Karachi","Lahore","Multan","Isl","Quetta"];
// document.write(`Cities List : ${cityNames} <br> <br>`)
// let selectedCities=cityNames.slice(2,5);
// document.write(`Selectedcities List:${selectedCities}`)

// // 12. Write a program to create a single string from the below mentioned array: var arr = [“This ”, “ is ”, “ my ”, “ cat”];

// let array = ["This","is","my","cat"]
// document.write(`Array : <br> ${array} <br>`);
// let string=array.join(' ');
// document.write(`String: <br/> ${string} </br>`);




// // 13. Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)

// let devices = ["keyboard", "mouse", "printer", "monitor"];
// let out;
// document.write(`Devices : ${devices} <br>`);
// out = devices.shift();
// document.write(`Out <br> ${out} <br>`)

// out = devices.shift();
// document.write(`Out <br> ${out} <br>`)
// out = devices.shift();
// document.write(`Out <br> ${out} <br>`)
// out = devices.shift();
// document.write(`Out <br> ${out} <br>`)


// // 15.  Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. Display the following dropdown/select menu in  browser using document.write() method: 

// let phoneMenu = ['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony', 'Haier'];
// let index = 0;
// document.write("<select>")
// document.write(`<option> ${phoneMenu[index++]} <option>`)
// document.write(`<option> ${phoneMenu[index++]} <option>`)
// document.write(`<option> ${phoneMenu[index++]} <option>`)
// document.write(`<option> ${phoneMenu[index++]} <option>`)
// document.write(`<option> ${phoneMenu[index++]} <option>`)
// document.write(`<option> ${phoneMenu[index++]} <option>`)
// document.write("<select>")

// // <<<<<<<<< Chapter 14-16  END >>>>>>>>>>>
// window.alert("hello")
let my = ("muneeza");
console.log(my);
