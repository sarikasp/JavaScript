// console.log, alert, document.write

// console.log("Hello");
// alert("Hello");
// document.write("Hello");


// vaiables

var a = 10
console.log(a);
a = 20
console.log(a)


// prompt

// var nam = prompt("Enter your name")
// console.log(nam)


// string concatinatination perator

// var nam = prompt("Enter your name");
// var msg = 'Hello ' + nam + ' welcome to Pune';
// msg += " We are glad that you come by to visit, ";
// msg += nam
// msg += ". Please come again , when you want to learn more.";
// document.write(msg)


// string methods

var nm = 'Gauri'

console.log(nm.toUpperCase())
console.log(nm.toLowerCase())


// length
console.log(nm.length)

// indexOf
z = nm.indexOf('a')
console.log(z)

// var str = "Apple, Banana, Kiwi";
// var res = str.slice(-12, -6);
// console.log(res)

// var res = str.slice(7);
// console.log(res)

// var res = str.slice(-12);
// console.log(res)

// var str = "Apple, Banana, Kiwi";
// var res = str.substring(15, 19);
// console.log(res)


// var nam = prompt("Enter your name")
// console.log(nam)
// console.log("Hello " + nm.toUpperCase() + " Pansare")




var htmlBudget = prompt("Enter HTML Budget");
var CSSBudget = prompt("Enter CSS Budget");
var totalBudget = htmlBudget + CSSBudget
document.write("Total Budget" + totalBudget)
// Total Budget2323


var htmlBudget = parseInt(prompt("Enter HTML Budget"));
var CSSBudget =  parseInt(prompt("Enter CSS Budget"));
var totalBudget = htmlBudget + CSSBudget
document.write("Total Budget" + totalBudget)
// Total Budget 46

var htmlBudget = prompt("Enter HTML Budget");
var CSSBudget =  prompt("Enter CSS Budget");
var totalBudget = parseInt(htmlBudget) +parseInt(CSSBudget)
document.write("Total Budget" + totalBudget)
// Total Budget 46


