// // CHAPTER 31-34 DATE METHODS // //

// // Qno:1 . Write a program that displays current date and time in your browser

// let today = new Date();
// document.write(today + "<br/>");

// // Qno:2  Write a program that alerts the current month in words. For example December.


// let date = new Date();
// let currentMonth = date.getMonth();

// monthList = [ "January", "Febmliruary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
// document.write(`Current Month: ${monthList[currentMonth]}`)

// // Qno:3 Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.

// var today = new Date();
// let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// let currentDay = days[today.getDay()]
// let shortDay = currentDay.slice(0,3)
// document.write(shortDay)

// // Qno:4  Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.

// let date = new Date ();
// let day = date.getDay();
// let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// if (day === "Saturday" || day==="Sunday") {
//     alert("Today is Fun day ")
// }
// else{
//     alert("Today is not Fun day")
// }

// // Qno:5 Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”. 

// let todayDate = new Date();
// let date = todayDate.getDate();

// if (date<16) {
//     document.write("First fifteen days of the month")
// }
// else{
//     document.write("Last day of the month")
// }


// // Qno: 6   Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object.


// var dateNow=new Date();
// var millisec=dateNow.getTime();

// document.write(`Current date: ${dateNow} <br/>`);
// document.write(`Elasped milliseconds sicne January 1,1970: ${millisec} <br/>`);
// document.write(`Elasped minutes since January 1,1970: ${millisec/(999*60)}`);


// // Qno: 7  Write a program that tests whether it's before noon and alert “Its AM” else “its PM”. 

// let dateNow = new Date();
// let hourse = dateNow.getHours();

// if (hourse<12) {
//     alert("It's AM")
// }
// else{
//     alert("It's PM")
// }


// // Qno:8  Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate. 

// let todayDate = new Date ();
// let laterDate = new Date("27 Dec 2020");
// document.write(`Later Date: ${laterDate} `)

// // Qno:9
// // Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan? Note: 1st Ramadan was on June 18, 2015 


// let dateToday = new Date ();
// let todayMilli = dateToday.getTime();
// let lastRamadan = new Date ("June 18, 2015");
// let milliRamdan = lastRamadan.getTime();
// let diffMilliSec = todayMilli-milliRamdan;
// let days = Math.floor(diffMilliSec/(1000*60*60*24));
// document.write(`${days} days have passed since Ist Ramdan, 2015`)


// // Qno:10
// // Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015.

// let dateNow = new Date();
// let todayMilli = dateNow.getTime();
// let year2015 = new Date('1 Jan,2015');
// let milli2015 = year2015.getTime();
// let diffMilliSec = todayMilli-year2015
// let seconds = Math.floor(diffMilliSec/(1000));
// document.write(`On refrence date: ${dateNow} <br/> ${seconds} seconds had passed since begining of 2015`)

// // Qno:11 
// // Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and finally display the date object in your browser. 

// let today = new Date();
// let hoursAgo = today.getHours();
// hoursAgo = hoursAgo-1;
// document.write(`Current date: ${today} <br/>`)
// today.setHours(hoursAgo);
// document.write(`1 hour ago, it was ${today}`)

// // Qno:12 
// // Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?

// let today = new Date();
//  yearsAgo = today.getFullYear();
// yearsAgo = yearsAgo-100;
// document.write(`Current date : ${today} <br/>`)
// today.setFullYear(yearsAgo);
// document.write(`100 years back, it was ${today}`)


// // Qno: 13
// // Write a program to ask the user about his age. Calculate and show his birth year in your browser. 

// let age =+ prompt('Enter your age');
// let today = new Date();
// let yearNow = today.getFullYear();
// let birthYear = yearNow-age;
// document.write(`Your age is ${age} <br/> Your birth year is ${birthYear}`)


// // Qno: 14 
// // Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2 decimal places. Display the following fields: a. Customer Name b.

// let customerName = "Muneeza";
// let today = new Date();
// let month = today.getMonth();
// mlist = [ "January", "Febmliruary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
// let noUnits = 410;
// let chargePerunit = 16;
// let netAmount = noUnits*chargePerunit;
// let lastCharge = 350;
// let afterDueDate = netAmount+lastCharge;
// document.write("<h1> K-Electric Bill </h1>")
// document.write(`Customer Name :${customerName} <br>`);
// document.write(`Month : ${mlist[month]} <br>`);
// document.write(`Number of units : ${noUnits} <br>`);
// document.write(`Charges per unit : ${chargePerunit} <br>`);
// document.write("<br>")
// document.write(`Net Amount Payabale (Within Due Date) : ${netAmount} <br>`);
// document.write(`Late payment surcharge : ${lastCharge} <br>`);
// document.write(`Gross payment Payable(after Due Date) : ${afterDueDate} <br>`);


// // CHAPTER 31-34 END // // 
