// // CHAPTER 49-52 // //

// // Qno:1
// // Create a signup form and display form data in your web page on submission.


// function info(){
// let userName=document.getElementById('name').value;
// let fatherName=document.getElementById('fatherName').value;
// let email=document.getElementById('email').value;
// let number=document.getElementById('no').value;
// document.write(`Name : ${userName}<br>`)
// document.write(`Fathername: ${fatherName}<br>`)
// document.write(`Email: ${email}<br>`)
// document.write(`Number : ${number}<br>`)
// }


// // Qno:2
// // Suppose in your webpage there is content area in which you have entered your item details, 
// // but user can only see some details on first look. When user clicks on “Read more" 


// function readMore(){
//     let description='reiciendis, saepe optio nisi dolorum in repellat suscipit itaque aliquid ea iusto quasi blanditiis illum ex nam, officia ipsam neque doloribus';
//     let pera=document.getElementById('pera');
//     pera.innerHTML +=description
// }

// Qno:3



// let table = document.getElementById('recordTable')

// function addRecord(){
//     let studentName = document.getElementById('stdName')
//     let studentClass = document.getElementById('stdClass')
//     let row = document.createElement('tr')
//     let nametd = document.createElement('td')
//     let classtd = document.createElement('td')
//     let edittd = document.createElement('td')
//     let deletetd = document.createElement('td')
//     let nameText = document.createTextNode(studentName.value)
//     let classText = document.createTextNode(studentClass.value)
//     let editBtn = document.createElement('button')
//     let editText = document.createTextNode("Edit")
//     editBtn.setAttribute('onclick','editRecord(this)')
//     editBtn.appendChild(editText)
//     let delBtn = document.createElement('button')
//     let delText = document.createTextNode("Delete")
//     delBtn.setAttribute('onclick','deleteRecord(this)')
//     delBtn.appendChild(delText)
    
//     nametd.appendChild(nameText)
//     classtd.appendChild(classText)
//     edittd.appendChild(editBtn)
//     deletetd.appendChild(delBtn)
//     row.appendChild(nametd)
//     row.appendChild(classtd)
//     row.appendChild(edittd)
//     row.appendChild(deletetd)
//     table.appendChild(row)

//     studentName.value = ""
//     studentClass.value = ""
// }

// function editRecord(e){
//     let val = e.parentNode.parentNode.firstChild.innerText
//     let newVal = prompt("Edit your record",val)
//     let classval = e.parentNode.parentNode.firstChild.nextSibling.innerText
//     let newClass = prompt("Edit your Class",classval)
//     e.parentNode.parentNode.firstChild.innerText = newVal
//     e.parentNode.parentNode.firstChild.nextSibling.innerText = newClass
// }

// function deleteRecord(e){
//     e.parentNode.parentNode.remove()
// }

// // END OF CHAPTER 49-52 // // 