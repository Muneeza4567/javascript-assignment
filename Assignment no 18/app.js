// // CHAPTER 58-67 // //

// // Qno:1

//  // i. Get element of id “main-content” and assign it in a variable.
//  let mainContent = document.getElementById("main-content");
//  console.log(mainContent);
 

//  // ii. Display all child elements of “main-content” element.
//  console.log(mainContent.children);

 
// // iii. Get all elements of class “render” and show their innerHTML in browser.
// let renders = document.getElementsByClassName("render");
// for(let i=0; i< renders.length; i++){
//     console.log(renders[i].innerHTML + "<br/>");
// }


// // iv. Fill input value whose element id is “first-name”
// document.getElementById("first-name").value = "Alex";


// // v. Repeat for “last-name” and “email”
// document.getElementById("last-name").value = "Bank";
// document.getElementById("email").value = "alexbank@example.com";


// Qno:2


// let output = document.getElementById("output");

// // i. Node type of element having id “form-content”
// let formContent = document.getElementById("form-content");
// output.innerHTML += (`Node type of form-content: ${formContent.nodeType} <br/>`)

 
// // ii. Node type of element having id “lastName” and its child node
// let lastName =  document.getElementById("lastName");
// output.innerHTML += (`Node type of lastName : ${lastName.nodeType} <br/> `);
// output.innerHTML += (`Child node type of lastName : ${lastName.firstChild.nodeType} <br/> `);


// // iii. Update child node of element having id “lastName”
// lastName.firstChild.nodeValue = "Last Name : Mughal";
// output.innerHTML += (`Ubdate child node value : ${lastName.firstChild.nodeValue} <br/>`)


// // iv. Get first and last child of id “main-content”
// let  mainContent = document.getElementById("main-content");
// output.innerHTML += (`First child of main-content : ${mainContent.firstElementChild.nodeName} <br/>`)
// output.innerHTML += (`Last child of main-content ${mainContent.lastElementChild.nodeName} <br/>`);


// // v. Get next and previous siblings of id “lastName”
// let nextSibling = lastName.nextElementSibling;
// let prevSibling = lastName.previousElementSibling;
// output.innerHTML +=(`Next sibling of lastName : ${nextSibling.nodeName}`)
// output.innerHTML += (`Pervious sibling of lastName : ${prevSibling.nodeName}`)


// // vi. Get parent node and node type of element having id “email”
// let email = document.getElementById("email");
// output.innerHTML += (`Parent node of email: ${email.parentNode.nodeName}`);
// output.innerHTML += (` Node type of email: ${email.nodeType}`);

// // End of CHAPTER 58-67 // // 