//GETTING CSS/HTML ELEMENTS BY TAG 
//let allHeadings = document.getElementsByTagName("h1");

// console.log(allHeadings);
// console.log(allHeadings.length);

// //for loop that prints out all heading sin the console  one by one iniitialisation programming and iteration
// let i = 0
// for (let i = 0; i < allHeadings.length;i++) {
//     console.log(allHeadings.length[i]);
// }

//CAPTURE HTML CSS ELEMENTS BY class JS
// let allHeadings = document.getElementsByClassName("head");

// console.log(allHeadings);
// console.log(allHeadings.length);

// let firstHeading =document.getElementById("word");

// console.log(firstHeading);
// let headings = document.querySelector("h1");
// headings[3].className ="butt"
// headings[3].id = "four"

// let thirdHeading  = document.querySelector(".butt");

// let secondHeading = document.querySelector("#two");

// console.log(allHeadings)
// console.log(thirdHeadings)
// console.log(secondHeadings)

//create lists of grains using
let lists = ``

// //put lists in web capture by tag
// let ul = document.querySelector("ul")
// //innerHTMLpushes tags into html 
// ul.innerHTML = lists

let biggestHeading = document.createElement("h1")

biggestHeading.className = "title"
biggestHeading.style.fontSize = "50px"
biggestHeading.textContent = " This is the biggest tittle in javascript."
console.log(biggestHeading)

let = document.querySelector(".container")
container.appendChild(biggestHeading)

