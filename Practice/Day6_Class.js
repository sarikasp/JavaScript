// class Person{

//     firstName = 'Gauri';
//     age = 22;
//     display(){
//         console.log(this.firstName, this.age)
//     }
// }

// var a = new Person()
// a.display() // Gauri 22
// console.log(a.firstName) // Gauri
// console.log(a.age) // 22


// // // Way 1: Changing the instance variable outside the class 

// a.firstName = 'Sarika'
// a.age = 23
// a.display() // Sarika 23


// Way 2: Using Setter Getter Methid



// class Person{

//     firstName = 'Gauri';
//     age = 22;
    
    // get getName(){
    //     return this.firstName
    // }

    // get getAge(){
    //     return this.age
    // }

    // set setName(namey){
    //     this.firstName = namey
    // }

    // set setAge(age){
    //     this.age = age
    // }



// }

// var a = new Person()
// console.log(a.firstName) // Gauri
// console.log(a.age) // 22

// a.age = 23
// console.log(a.getAge) // 23


// a.firstName = 'Sarika'
// var namer = a.getName
// console.log(a.getName) // Sarika
// console.log(namer) // Sarika


// // Way 3: Using Constructor:

// class Person{

//     constructor(firstName, age){
//         this.firstName = firstName
//         this.age = age
//     }

//     get getName(){
//         return this.firstName
//     }

//     get getAge(){
//         return this.age
//     }

//     set setName(namey){
//         this.firstName = namey
//     }

//     set setAge(age){
//         this.age = age
//     }

// }

// var z = new Person('Gauri', 22)
// console.log(z.firstName) // Gauri
// console.log(z.age) // 22
// z.setName = 'Sarika'
// z.setAge = 23
// console.log(z.firstName) // Sarika
// console.log(z.age) // 23

// console.log(z.getName) // Sarika
// console.log(z.getAge) // 23




/////////////////////////////////////////////////////////////////////


class Name{

    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }

    display(){
        console.log(`My FirstName is: ${this.firstName} and my LastName is: ${this.lastName}`)
    }

}

var x = new Name('Gauri', 'Pansare')
x.display()

var objName = []

for(var i=0; i<2; i++){
    fname = prompt('Enter Your First Name: ')
    lname = prompt('Enter Your Last Name: ')

    objName.push(new Name(fname, lname))
}

for(var i=0; i<objName.length; i++){
    objName[i].display()
}





