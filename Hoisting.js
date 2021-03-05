// Hoisting:

// var age;
// console.log(age);  // undefined
// age = 21;
// console.log(age);   // 21

// console.log(a) // undefined
// var a = 10; 


// Hoisting in case of function declration

// add()
// function add(){
//     console.log(5+6);  // 11
// }

// Hoisting in case of function expression

// var add  
// // add()    // add is not function

// add = function(){
//     console.log(7+7);
// }

// add();    // 14

// Hoisting is not allowed in function expression


// // variables 

// var age =34;
// console.log(age)  // 34
// age = 43
// console.log(age)  // 43

// var age;

// console.log(age) // undefined
// var age = 34;

// function hello(){
//     //var age;
//     console.log(age); // 34 
//     age = 89; 
//     console.log(age)  //89 
// }
// hello();
// console.log(age)  // 89

//  Lexical scope

// var a = 20;
// var c = 34;
// first()
// function first(){
    
//     var b = 34;
//     console.log(b)  //34
//     console.log(a);  // 20
//     second()
//     function second(){
//         var a = 10;
//         console.log(a + b)   //  44 
//         console.log(c)       // 34
//         three()
//         function three(){
//             var c = 20;
//             console.log(a+b+c)      // 64
//         }

//     }

// }


// // Lecture : The this keyword 

// console.log(this);  // window
// var a = 10;

// this.a = 30;

// var ch = 67;

// var objOne = {
//     name:"chinmay",
//     age:29,
//     add:function(){
//         console.log(this)     // {name: "chinmay", age: 29, add: ƒ}
//         console.log(this.age);  // 29
//         console.log(this.name)  // chinmay
//         addOne()
//         function addOne(){
//             console.log(this);      // window
//         }
//     }

// }
// objOne.add();
// console.log(this) // window
// console.log(this.ch); // 67



// // Method borrowing

// var John = {
//     name:'john',
//     birthYear:1989,
//     currentYear:2020,
//     calculateAge:function(){
//         return this.currentYear - this.birthYear;  
       
//     }
// }

// var Mark = {
//     name:'mark',
//     birthYear:1990,
//     currentYear:2020, 
// }

// Mark.calculateAge = John.calculateAge

// agejohn =John.calculateAge()
// console.log(agejohn)      // 31

// ageMark = Mark.calculateAge();
// console.log(ageMark)      // 30




// Constructor 

// var Mark = {
//     name:'mark',
//     birthYear:1990,
//     currentYear:2020,
  
// }

// var Person = function(na ,bi,cu ){

//     this.name = na;
//     this.birthYear =bi;
//     this.currentYear= cu;
    
// }

// Person.prototype.calucalteAge = function(){
//     return this.currentYear - this.birthYear
// }

// console.log(Person);

// Person.prototype.printName = function(){
//     console.log(this.name);
// }



// var Chinmay = new Person("chinmay",1990,2020);
// var Mark = new Person("Mark",1990,2020);
// var Radhika = new Person("Radhika",1990,2020);
// console.log(Chinmay, Mark , Radhika);

// Radhika.calucalteAge()


// Person {name: "chinmay", birthYear: 1990, currentYear: 2020}
// Person {name: "Mark", birthYear: 1990, currentYear: 2020} 
// Person {name: "Radhika", birthYear: 1990, currentYear: 2020}



// Another way to create Object:

// ********************** ONE ***************

// var person = function(fname, lname, age){

//     this.Firstname = fname;
//     this.lastName =lname;
//     this.age= age;
    
// }

// var sarika = new person("Sarika","Pansare",22);
// console.log(sarika);


// ********************** TWO ***************

// person = {
//     firstName : 'Sarika',
//     lastName : 'Pansare',
//     age : 21
// }

// var sarika = Object.create(person);
// sarika.firstName = 'Gauri';
// sarika.age = 22;

// console.log(sarika);


// ********************** THREE ***************

// person = {
//     firstName : 'Sarika',
//     lastName : 'Pansare',
//     age : 21
// }

// var sarika = Object.create(person,
//     {
//         city : {value:"Sangamner"},
//         cuurentLocaion : {value: "Pune"}
//     });

// console.log(sarika);


// Object VS Primiive Data:


// var age = {
//     young : "Sarika",
//     old : "Parents"
// }

// var you = age;
// you.young = "Gauri"

// console.log(you.young); // Gauri
// console.log(age.young);  // Gauri


// Funcion as a first class functions in Javascript:

// var girl = 
// {
//     name:"Sarika",
//     age:67
// }

// function calculateBirthYear(obj,age)
// {
//     //obj.age = 22;
//     age = 25;
//     console.log(age); // 25
//     console.log(obj.age);
//     console.log(girl.age);
// }

// // // console.log(obj.age);
// console.log(girl.age); // 67
// console.log(age);

// function calculateBirthYearr(girl,age)
// {
//     //console.log(age);
// }


// calculateBirthYear();
// calculateBirthYearr();


// Passing Function as Function to Another FUnction:

// Generic Funcion:

var ages = [45, 66, 77, 44, 56, 67, 88];
var currentYear = 2020;

function printArray(arr,fn)
{
    var arry = [];
    for(var i = 0; i < arr.length; i++)
    {
        arr.push(fn(arr[i]));
    }
    return arry;
}

function birthYear(age)
{
    return currentYear - age;
}

function isOld(age)
{
    return age > 50;
}

function billPrcent(bill)
{
    return bill * 0.1;
}


console.log(printArray(ages,birthYear));
console.log(printArray(ages,isOld));
console.log(printArray(bill,billPrcent));




