/*
  Javascript lets you create interactive web pages that lets you deal with the
  user interaction
  Interactive pages with javascript
  1)Selecting the element
  2)Manipulating the element
  3) Listening to user actions
*/

// Progam 1:

// heading = document.getElementById('myHeading');
//         //console.log(heading);
// heading1 = document.getElementById('myHeading2');
// button = document.getElementById('myButton')
//         //console.log(button);

// button.addEventListener( 'click', () =>
// {
//         heading.style.color = 'red';
//         heading1.style.color = 'yellowgreen';
// });


// Program 2:

// heading = document.getElementById('myHeading3');
// button = document.getElementById('myButton')

// button.addEventListener( 'click', () => heading.style.color = 'coral' );

// Program 3:

// heading1 = document.getElementById('myHeading');      
// heading2 = document.getElementById('myHeading2');
// heading3 = document.getElementById('myHeading3');
// input = document.getElementById('myInput');

// button = document.getElementById('myButton')

// button.addEventListener( 'click', () =>
// {
//         heading1.style.color = input.value;
//         heading2.style.color =input.value;
//         heading3.style.color =input.value;
// });



// Program 4:
// lst = document.getElementsByTagName('li');
// console.log(lst);
// button = document.getElementById('myButton');

// button.addEventListener( 'click', () =>
// {
//         for(var i = 0 ; i < lst.length; i++)
//             {
//                 lst[i].style.color = 'red';
//             }
// });



// // Program 5:

// lst = document.getElementsByClassName('colorList');
// console.log(lst);
// input = document.getElementById('myInput')
// button = document.getElementById('myButton');

// button.addEventListener( 'click', () =>
// {
//         for(var i = 0 ; i < lst.length; i++)
//             {
//                 lst[i].style.color = input.value;
//             }
// });


// // Program 6:

// // querySelector 

// heading1 = document.querySelector('.myHeading');  
// button = document.getElementById('myButton');
// button.addEventListener( 'click', () =>
// {
//     heading1.style.color = 'yellowgreen';             
// });


// // querySelectorAll 

// lst = document.querySelectorAll('.colorList');
// console.log(lst);
// button = document.getElementById('myButton');
// console.log(button)
// button.addEventListener( 'click', () =>
// {
//         for(var i = 0 ; i < lst.length; i++)
//             {
//                 lst[i].style.color = "coral";
//             }
// });


// // Even Odd : 


// lst = document.querySelectorAll('.colorList');
// console.log(lst);
// button = document.getElementById('myButton');
// console.log(button)
// button.addEventListener( 'click', () =>
// {
//     even = document.querySelectorAll('li:nth-child(even)')
//         for(var i = 0 ; i < even.length; i++)
//             {
//                 even[i].style.color = "coral";
//             }

//     odd = document.querySelectorAll('li:nth-child(odd)')
//         for(var i = 0 ; i < odd.length; i++)
//             {
//                 odd[i].style.color = "yellowgreen";
//             }        
// });




// // Program 8:

// paragraph = document.querySelector('.para');
// //console.log(paragraph.textContent);
// paragraph.textContent = 'Javascript'


//  paragraph = document.querySelector('.para');
//  console.log(paragraph)
//  input = document.querySelector('#myInput');
//  button = document.querySelector('#myButton');
//  console.log(button)

//  button.addEventListener('click', () =>
//  {
//         paragraph.textContent = input.value + ' : ';
//  });


// paragraph = document.querySelector('.para');
// heading = document.querySelector('#myHeading');
// console.log('heading');
// input = document.querySelector('#myInput');
// button = document.querySelector('#myButton');

// button.addEventListener('click', () =>
// {
//        paragraph.innerHTML= input.value + ' : ';
// });


// console.log(document.querySelector('ul').innerHTML)


// // Program 9 :

// heading = document.querySelector('#myHeading');
// button = document.querySelector('#myButton');
// list = document.querySelector('ul');

// button.addEventListener('click', () =>
// {
//        list.innerHTML="<li> list1 </li><li> list2</li><li> list3 </li>";
// });

// // Program 10 :

// heading = document.querySelector('#myHeading');
// button = document.querySelector('#myButton');
// list = document.querySelector('ul');

// button.addEventListener('click', () =>
// {
//        list.innerHTML="<li> list1 </li><li> list2</li><li> list3 </li>";
// });
