// Javascript lets you create interactive web pages that lets you deal with the
// user interaction
// Interactive pages with javascript
// 1)Selecting the element
// 2)Manipulating the element
// 3) Listening to user actions


/*
  some are basically the property of global environment object which is called as window.
  1)alert("Hello World");
  2)location.href
  3)(type window and search for the alert() and location object).
  4) All these will be basically the part of global  window object.
  5) window.alert(); // same function as written obove
  6)document is basically another property of window
  (document basically refers to the current page).
 */


 /*
    What is Document ?
          Document is  a global object representing the html content of a web page
          DOM is representation of html elements which javascript can use .
          DOM is basically the live entity , changes that javascript made to the DOM ,changes the whole entity
         DOM represents the webpage in tree like struture (please refer to screen short)
*/

/*
      Recap:-
          Global scope - window object
          Document
          Document object model
          -------------------------------------->
          Select an element
          Read or change elements
          Respond to user events
          Add Event Listener is a function which tells the element to listen to the browser events.
          (A field can basically respond to its content with user actions , please refer to screen short)
          ----------------------------------------->
*/

var userElementOne = document.getElementById('myHeading');
// console.log(userElementOne);

// var text = userElementOne.innerHTML;
// console.log(text);

// userElementOne.innerText = "Hiii it's me Gauri.......";
// console.log(userElementOne);


// this is wrong way--------->

// document.getElementById('myHeading').style.color="blue";
// document.getElementById('myHeading').style.display="none";
// document.getElementById('myHeading').style.display="block";
// document.getElementById('myHeading').style.color="red";
// document.getElementById('myHeading').style.background="yellow";


// var userElementOne = document.getElementById('myHeading');
// userElementOne.style.color="blue"
// userElementOne.style.display="none";
// userElementOne.style.display="block";
// userElementOne.style.color="red";
// userElementOne.style.background="#a3c2c2";


//Function :

//Function Declaration

// function add()
// {
//     console.log("Hello...");
// }


//Function Expression

// var add =  function() 
// {
//     console.log("Hello...");
// }


// Arrow Function 

// var add = () => console.log("Hello...");

// console.log(add); -------> function defination
// console.log(add()); -------> function call


// call back function are also called as anonymous function
// they are usually called user action

 userElementTwo = document.getElementById('myHeading2');
console.log(userElementTwo);
var userActionElement = document.getElementById('myButton');

userActionElement.addEventListener("click", () =>
{
        userElementTwo.style.color = "red";
        //userElementTwo.style.display="none";
        //userElementTwo.style.display="block";
        userElementTwo.innerText = "New text updated on button clcik...";
});


// From Chinmay Deshpande to Everyone:  06:07 PM
// https://github.com/panache-chinmay/javascriptDom/blob/master/script.js


// // Program 1:

// var text = document.getElementById('myHeading'); // returns the element if present
// //console.log(text);
// text.style.color = 'Red';

/*
        // Second parameter is the call back function
        // document is a global variable and get element by Id is the method of global object document
        (Selecting the element basically makes it avaiable for us to do something with it)
    */


// Program 2:


// var text = document.getElementById('myHeading'); // returns the element if present
//     //console.log(text);
// text.style.color = 'Red';
// var text1 = document.getElementById('myHeading2');
// var button = document.getElementById('myButton');
//     //console.log(button);

//     button.addEventListener("click" , () => 
//     {
//               text.style.color="#660066";
//               text.style.background ="#e0e0eb";
//               text1.style.color="#660066";
//               text1.style.background ="#e0e0eb";
//     });
   

// // Program 3:

// //(Changing the color of heading with respect the color entered in checkbox)
//         // We can access the value of any element with .value

        
    // var text = document.getElementById('myHeading'); // returns the element if present
    // var text1 = document.getElementById('myHeading2');
    // var inputBox = document.getElementById('myInput');
    // var button = document.getElementById('myButton');
    
        // button.addEventListener("click" , () => 
        // {
        //         text.style.color = inputBox.value;
        //         text1.style.color = inputBox.value;
        // });

// // Program 4:

// var text = document.getElementById('myHeading'); // returns the element if present
// var text1 = document.getElementById('myHeading2');
// var inputBox = document.getElementById('myInput');
// var button = document.getElementById('myButton');
// var list = document.getElementsByTagName('li');

// button.addEventListener("click" , () => 
// {
//     for (var i = 0 ; i< list.length ; i++)
//     {
//        list[i].style.color = inputBox.value;
//         text.style.color = inputBox.value;
//         text1.style.color = inputBox.value;
//     }    
// });


// // Program 5:

// // (placing a css style to element with class like the error warning shown before)
// // (update the html with class attribute to few list elements)

// var text = document.getElementById('myHeading'); // returns the element if present
// var text1 = document.getElementById('myHeading2');
// var inputBox = document.getElementById('myInput');
// var button = document.getElementById('myButton');
// var list = document.getElementsByClassName('lst');

// button.addEventListener("click" , () => 
// {
//     for (var i = 0 ; i< list.length ; i++)
//     {
//         list[i].style.color = inputBox.value;
//         text.style.color = inputBox.value;
//         text1.style.color = inputBox.value;
//     }
// });


// Program 6

 /*
 document.querySelector(); // returns only the first element with the selector
 document.querySelectorAll(); // returns all the elements that matches the selector
 // first try in console
 // selecting the element with tagName
 */


// var text = document.getElementById('myHeading'); // returns the element if present
// var text1 = document.getElementById('myHeading2');
// var inputBox = document.getElementById('myInput');
// var button = document.getElementById('myButton');
// var list = document.getElementsByClassName('lst');

// button.addEventListener("click" , () => 
// {
//     for (var i = 0 ; i< list.length ; i++)
//     {
//         list[i].style.color = inputBox.value;
//         text.style.color = inputBox.value;
//         text1.style.color = inputBox.value;
//     }
// });
        

        // var button = document.getElementById('myButton');
        // var list = document.getElementsByTagName('li');
        // console.log(list)
        
        // button.addEventListener("click" , () => 
        // {
        //     for (var i = 0 ; i< list.length ; i++)
        //     {
        //         if (i % 2 == 0)
        //             {
        //                   list[i].style.color = "coral";
        //             }
        //         else
        //             {
        //                   list[i].style.color = "green"; 
        //             }
        //     }
        // });


        // var text = document.getElementById('myHeading'); 
        // var text1 = document.getElementById('myHeading2');
        // var inputBox = document.getElementById('myInput');
        // var buttonAdd = document.getElementById('myButton');
        // var buttonRemove = document.getElementById('myButton2');
        // // var list = document.getElementsByTagName('li');
        // // var list = document.getElementsByClassName('lst');
        // // console.log(list);
        // list = document.querySelector('#add');
        // console.log(list);

        // buttonAdd.addEventListener("click", () =>
        // {
        //    var newList = document.createElement('li');
        //    newList.textContent = inputBox.value;
        //    list.appendChild(newList);
        //    inputBox.value= '';
        // });

        // buttonRemove.addEventListener("click", () =>
        // {
        //    var oldList = document.getElementsByTagName('li');
        //    var lastChild = document.querySelector('li:last-child');
        //    list.removeChild(lastChild);
        // });


        // list.addEventListener("mouseover", (event) =>
        // {
        //     if(event.target.tagName == 'LI')
        //     {
        //         event.target.textContent = event.target.textContent.toUpperCase();
        //     }

        // });

        // list.addEventListener("mouseout", (event) =>
        // {
        //     if(event.target.tagName == 'LI')
        //     {
        //         event.target.textContent = event.target.textContent.toLowerCase();
        //     }

        // });






























