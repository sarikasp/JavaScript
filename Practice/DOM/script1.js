// alert('hello')

// window.alert('hello')

// //document is alert property of window
// //document is another property of window


// 3 steps:
// Selecting the element 
// Manipulate 
// Based on User action


// // change color of text:
// var a = document.getElementById('one')  
// console.log(typeof a) // object
// a.style.color = "red"

// // change text:
// console.log(a.textContent)  // MinSkole 
// a.textContent = "New Text" // change text MinSkole to New Text


// // Click Event:
// a.addEventListener('click',function(){
//     a.style.color = "Blue"
// })

// // MouseOver:
// a.addEventListener('mouseover',()=>{

//     a.style.color = "Green"
//     a.style.fontSize = "50px"
//     a.style.background = "yellow"
//     a.style.fontFamily = 'Constantia'

// })


// // Double Click:
// a.addEventListener('dblclick',()=>{
//     a.style.color = "Purple"
//     a.style.fontSize = "50px"
//     a.style.background = "orange"
//     a.style.fontFamily = 'Constantia'

// })


// basd on user action:

// Javscript to add , dele , updated , insert ??? 
// html element ?? Where?? in DOM  (Documet object model )



let txt1 = document.getElementsByTagName('h1')[0]
// console.log(txt1)
let txt2 = document.querySelector('#hello')
// console.log(txt2)
let input = document.getElementsByTagName('input')[0] 
// console.log(input)
let btn1 = document.querySelector('#btn1')
// console.log(btn1)
let btn2 = document.querySelector('#btn2')
// console.log(btn2)
var flowersList = document.getElementsByTagName('li')
console.log(flowersList)


// btn1.addEventListener('click', ()=>{
//     console.log(input.value)
//     txt1.style.color = input.value
//     txt2.style.color = input.value
// })

// btn2.addEventListener('click', ()=>{
//     console.log(input.value)
//     txt1.textContent = input.value
//     txt2.textContent = input.value
// })





// btn1.addEventListener('click',()=>{
//     for(let i = 0 ; i < flowersList.length ;i++){
//         flowersList[i].style.color = input.value
//     }
// })



// textContent , innerhtml ,innertext



//# number of character in string if odd then  red
// for(let i = 0 ; i < flowersList.length ;i++){
//     if ((flowersList[i].textContent.length % 2) === 0){
//         flowersList[i].style.color ="green"
//     }
//     else{
//         flowersList[i].style.color ="red"
//     }
// }


for(let i = 0 ; i < flowersList.length ;i++){
    if (i  % 2 == 0){
        flowersList[i].style.color = "blue"
    }
    else {
        flowersList[i].style.color = "orange"
    }
}






















