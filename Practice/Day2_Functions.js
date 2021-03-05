// Functions:

// var a = 20;

// function add(){
//     var a = 30;
//     console.log(a) // 30
// }

// add()
// console.log(a) // 20



// var a = 40;

// function add(){
//      a = 50;
//     console.log(a) // 50
// }

// add()
// console.log(a) // 50


// //  let and const are blocked scoped 


// let

// var b = 50;

// function add(){
//     var b = 60;
//     console.log(b) // 60

//     {
//         let b = 70
//         console.log(b) // 70
//     }

//     console.log(b) // 60
// }

// add()
// console.log(b) // 50



// var a = 20
// function add(){

//     var a = 30
//     console.log(a) // 30
//     {

//         let a = 10
//         console.log(a)   //  10
//         a = 40
//         console.log(a) // 40
//         a = 50
//         console.log(a) // 50

//     }
//     a = 60
//     console.log(a) // 60
// }

// add()
// console.log(a) // 20


// let

// {
//     let x = 10
//     console.log(x) // 10
// }
// console.log(x) // x is not defined


// const

// {
//     const x = 10
//     console.log(x) // 10
// }
// console.log(x) // x is not defined


// {
//     const  a = 40
//     a = 50   // Error linne
//     console.log(a)

// }


// Function  declaration


// function functionNAme( parameter1 , parameter2 ){  // blocks

//     //staments  ---1
//     //staments  ---2
//     //staments  ---3
//     //staments  ---4
//     //staments  ---5


// }


// Function declaration

// function add(x,y){
//     console.log(x+y) // 6
// }
// add(2,4)

// function add(x,y){
//     return x + y 
// }

// var x = add(10,20)
// console.log(x) // 30
// console.log(x+30) // 60

// function add(){
//     console.log(2+3) // 5
// }

// add()

// function add(){
//     return 10 
// }

// var c = add()
// console.log(a)


// Function expression 



// var functionName = function(para1, para2){
//     //statements...
//     //stament ...
// }

//add()

// var add = function(x,y){
//     console.log(x+y)
// }
// add(10,30) // calling the function 
// console.log(add)

// // function add(x,y){
// //     console.log(x+y)
// // }



// var sub = function(param1,param2){
//     return param1 -param2

// }
// var val = sub(100, 78) 
// console.log(val) // 22
// console.log(val *23) // 506

// console.log(sub)   
// // ƒ (param1,param2){
// //     return param1 -param2
// // }



// let addr = function(x,y){
//     console.log(x+y)
// }

// // Calling function
// addr(12,13)   // 25

// // Printing complete defination
// console.log(addr) 
// // ƒ (x,y){
// //     console.log(x+y)
// // }

// var x = 10
// console.log(x) // 10


// Arrow


// var add = (x,y) => {
//     console.log(x+y)
// }
// add(10,30) // 40

// var add = (x,y) => console.log(x+y)
// add(10,30)


// var add = (x,y) => x+y 
// var c = add(10,30)
// console.log(c)


// var add = x => x+y 
// var c = add(10,30)
// console.log(c)


// var add = () => x+y 
// var c = add(10,30)
// console.log(c)



// Function as parameter to another 

var  add = function(x,y){
    console.log(x+y)
}
function printIn(fn , x ,y){
    fn(x,y)
}
printIn(add,10,30) // exection start





















