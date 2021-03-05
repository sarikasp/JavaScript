// // // // Program 1:
// var number = parseInt(prompt("Enter the Numbar..."))
// if(number > 0)
// {
//     document.write(`<b>Number is Positive....!!!</b>`);
// }
// else
// {
//     document.write(`<b>Number is Negative....!!!</b>`);
// }

// // // // Program 2:

// for(var i = 0; i< 7; i++)
// {
//     if( i === 3 || i === 6)
//     {
//         continue; 
//     }
//     document.write(` <b>${i}</br></b>`);
// }


// // // // Program 3:

// for(var i = 1; i<= 100; i++)
// {
//     if(i % 3 == 0 && i % 5 == 0)
//     {
//         document.write("FizzBuzz");
         
//     }
//     else if( i % 5 == 0)
//     {
//         document.write("Buzz");
//     }
//     else if(i % 3 == 0)
//     {
//         document.write("Fizz");
//     }
//     document.write(`<b> ${i}</br> </b>`);
// }

//  // // Program 4: 
// var number = parseInt(prompt("Enter the Numbar..."));
// var sum = 0;
// var temp = 0;
// while( number != 0)
// {
//     sum += number;
//     var number = parseInt(prompt("Enter the Numbar..."));    
// }
//     document.write(`<b>Sum is ${sum}....!!!</b>`);






// //  // // Program 5: // //Unsolved.........................




// var num = parseInt(prompt("Enter the number?"));
// document.write(`<b>Table is....!!!!!!</b>`);
// document.write("</br>");
// function table(num)
// {
//     for(var i = 1; i <= 10; i++)
//     {
        
//         document.write(`<b>${num*i}</b><br>`);
//     }
// }
// table(num);

// // // Program 7:

// // Way 1:

// var num = parseInt(prompt("Enter the number?"));
// document.write(`<b>Square is....!!!!!!</b>`);
// document.write("</br>");
//  square = function(num)
// {
//         document.write(`<b>${num*num}</b><br>`);           
// }
// square(num);


// // Way 2:

// var num = parseInt(prompt("Enter the number?"));
// document.write(`<b>Square is....!!!!!!</b>`);
// document.write("</br>");
//  square = function(num)
// {
//     document.write(`<b>Square of ${num} is ${num**2}...</b><br>`);   
          
// }
// square(num);


// // Program 8:

// //way 1:

// var string = prompt("Enter the String?");
// function firstLetter(string)
// {
//     if(typeof string === 'string')
//     {
//         return string.charAt(0).toUpperCase() + string.slice(1);
//     }
//     return null;
// }
// document.write(firstLetter(string));

// //way 2:


// function capitalize(string)
// {
//     return string.charAt(0).toUpperCase() + string.slice(1);

// }
// document.write(capitalize('hello world'))


// // way 3:

// function upperCase(str)
// {
//     var array1 = str.split(' ');
//     var newArray = [];
//     for(var x = 0; x < array1.length; x++)
//     {
//         newArray.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//     }
//     return newArray.join(' ');
// }
// document.write(upperCase("my name is sarika from sangamner.."))



// // // Program 9:

// var str = prompt("Enter the number?");
//  sortedStr = function(str)
// {
//         return str.split('').sort().join('');           
// }
// document.write(`<h2>${sortedStr(str)} </h2>`);



//     function ask(question, yes, no) {
//             if (confirm(question)) yes()
//             else no();
//           }
//           ask(
//             "Do you agree?",
//             function() { alert("You agreed."); },
//             function() { alert("You canceled the execution."); }
//           );

//      // // Function Expression:
//          
//          ask = function(question, yes, no) {
//                 if (confirm(question)) yes()
//                 else no();
//               }
//               ask(
//                 "Do you agree?",
//                  function() { alert("You agreed."); },
//             function() { alert("You canceled the execution."); }
//               );


//     // // Arrow Function:


//     ask = (question, yes, no) =>   {
//         if (confirm(question))
//          yes(); else no();
//         }
//         ask = (
//             "Do you agree?",
//           function() { alert("You agreed."); },
//             function() { alert("You canceled the execution."); }
//         );












//     // Assignment 3 Javascript
//     ⦁	Take a number from the user. Identify the given number is a positive number or negative number or 0.
//     ⦁	 Write a Python program that prints all the numbers from 0 to 6 except 3 and 6.
//     ⦁	Write a JavaScript program that iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".
//     ⦁	Write a program to add numbers until the user enters 0.
//     ⦁	Make a Simple Calculator using switch Statements.
//     ⦁	Take a number from the user, pass that number to function as a parameter and Write a function to print table of the given number.
//     ⦁	Write a function expression to print the square of the given number.
//     ⦁	Write a JavaScript function declaration that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
//     ⦁	Write a JavaScript function expression that returns a passed string with letters in alphabetical order. 
//     Example string: ‘minskoleopc’
//     Expected Output: ''ceiklmnoops”
//     Assume punctuation and numbers symbols are not included in the passed string.
//     0.	Replace Function Expressions with arrow functions in the code below:
//         function ask(question, yes, no) {
//             if (confirm(question)) yes()
//             else no();
//           }
//           ask(
//             "Do you agree?",
//             function() { alert("You agreed."); },
//             function() { alert("You canceled the execution."); }
//           );
//     


