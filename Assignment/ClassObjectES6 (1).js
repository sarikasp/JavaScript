console.log("Gauri..");
// // 1) A ES6 Program to define Student class and create object to it. Also, we will call
// //       the method and display the student's details.

// class Student{  
//        firstName = "Snehu";
//        studAge = 22;
//        studMarks = 95;

//     displayDetails(){
//         console.log(`My Name is ${this.firstName}`);
//         console.log(`I am ${this.studAge} years old`);
//         console.log(`I have Scores ${this.studMarks}`);
//     }
// }

// stud = new Student();
// stud.displayDetails();

//  // 2) A ES6 Program to create Student class with a constructor having more than one Parameter.


// class Student {

//     constructor (name, age, mark) {
//         this.firstName = name;
//         this.studAge = age;
//         this.studMarks = mark;
//     }

//     displayDetails() {
//         var fullName = this.firstName + this.studAge + this.studMarks;
//         console.log(fullName);
//     }
// }

// // // on object
// // stud2.displayDetails()

// const stud2 = new Student('Savi', 21, 90)
// console.log(stud2.firstName)
// console.log(stud2.studAge)
// console.log(stud2.studMarks)



//  3) A ES6 Program to understand instance variables.


// // class Student{  

// //     constructor (name='', age=0, mark=0) {
// //         this.firstName = name;
// //         this.studAge = age;
// //         this.studMarks = mark;
// //     }
// // }

// // // //Default Constructor:

// // // const sayli = new Student(1)
// // // console.log("Name:", sayli.firstName)
// // // console.log("Age:", sayli.studAge)
// // // console.log("Marks:", sayli.studMarks)

// // // parameterized constructor:

// // savi = new Student('Savi', 21, 80)
// // console.log("Name:", savi.firstName)
// // console.log("Age:", savi.studAge)
// // console.log("Marks:", savi.studMarks)

// //  4) A ES6 Program to understand class variable or static variable.


  
// }

//   // We can add properties to the class prototype
//     Players.prototype.additionalMethod = function() {
//       console.log("Player lastName: ", this.lastName);
//   };
  
//   var a = new Players(3, 'Batsman');

//   console.log("Player Name: ", a.firstname);      
//   a.additionalMethod();   // "public value"
//   Players.staticMethod();      // "static value"
//   a.privateMethod();   // "private value
//   a.publicMethod();       // "public value"
 

// // Asked Chinmay Sir........


// 5) A ES6 Program using a student class with instance methods to process the
//     data of several students.

// class Student{

//     constructor(name ='Gauri', marks=97){
//         this.firstName = name
//         this.marks = marks
//     }
//     display()
//     {
//         console.log(`Student Name ${this.firstName}`)
//         console.log(`Student Marks ${this.marks}`)
//     }
//     calculateGrade(){
//         if(this.marks > 85){
//             console.log("Grade A")
//         }
//         else if (this.marks > 70){
//             console.log("Grade B")
//         }
//         else if (this.marks > 40){
//             console.log("Grade c")}

//         else{
//             console.log("Fail")
//         }
//     }

// }
// var stud = parseInt(prompt("Please enter the number of student"));
// var i = 0;
// var studList = [];

// while (i < stud)
// {
//     const studName = prompt("Enter Student Name:")
//     const studMarks = parseInt(prompt("Enter Student Marks"))
//     const stud1 = new Student(studName, studMarks)
//     stud1.display()
//     stud1.calculateGrade()
//     i += 1
// }



// // 6) A Python Program to store data into instances using mutator methods
//       and to retrieve data from the instance using accessor methods

// // Error.............

class Student{

    setNameMarks(name, marks){
        this.firstName = name
        this.marks = marks
    }
    display()
    {
        console.log(`Student Name:  ${this.firstName}`)
        console.log(`Student Marks:  ${this.marks}`)
    }
    calculateGrade(){
        if(this.marks > 85){
            console.log("Grade A")
        }
        else if (this.marks > 70){
            console.log("Grade B")
        }
        else if (this.marks > 40){
            console.log("Grade c")}

        else{
            console.log("Fail")
        }
    }

}
var stud = parseInt(prompt("Please enter the number of student"));
var i = 0;


while (i < stud)
{
    const studName = prompt("Enter Student Name:");
    const studMarks = parseInt(prompt("Enter Student Marks"));
    const stud1 = new Student()
        Error:
    const stud1.setNameMarks(studName, studMarks);
    stud1.display()
    stud1.calculateGrade()
    i += 1
}









console.log("Gauri..");
// // 1) A ES6 Program to define Student class and create object to it. Also, we will call
// //       the method and display the student's details.

class Student{  
       firstName = undefined;
       studAge = undefined;
       studMarks = undefined;

    // displayDetails(){
    //     console.log(`My Name is ${this.firstName}`);
    //     console.log(`I am ${this.studAge} years old`);
    //     console.log(`I have Scores ${this.studMarks}`);
    // }
}

stud = new Student();
// stud.displayDetails();
console.log(stud);




















































