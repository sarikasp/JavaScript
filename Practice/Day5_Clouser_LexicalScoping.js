// console.log('hello')
// if(null){
//     console.log('hii')
// }


// nm = 'chinmay'
// var news = ''
// for(var i=nm.length-1; i>=0; i-- )
// {
//     news+= nm[i]
// }

// console.log(news)



// nm = 'chinmay'
// var news = ''
// for(var i=nm.length-1; i>=0; i-- )
// {
//     news+= nm[i]
// }

// console.log(news)



// nm = 'python is my fav sub'
// var news = ''
// for(var i=0; i < nm.length; i++ )
// {
//     news= nm[i] + news
// }

// console.log(news)




// var oldString = 'Python is my Favorite Subject'
// s = oldString.split(" ")
// var newString = ''
// for(var i = s.length-1; i >=0; i-- ){
//     newString += s[i] + ' '
// }
// console.log(newString)

// var oldString = 'Python is my Favorite Subject'
// s = oldString.split(" ")
// var newString = ''
// for(var i = 0 ; i < s.length; i++ ){
//     newString = s[i] + ' ' + newString 
// }
// console.log(newString)



// var newString = "python is my fev subject"

// var a = newString.split(" ")
// console.log(a)

// var reverseString = ""
// for(var i = a.length-1; i>=0;i--){
//     //console.log(a[i])
//     reverseString += a[i] + " "
// }
// console.log(reverseString)



// //////////////////////////////////////////////////////////////////////////////////////////////

// // Lexical Scopping:
// var x = 50
// function hello(){
//     var a = 10;
//     console.log(a) // 10

//     hii()

//     function hii(){
//         var b = 20
//         console.log(a) //10
//         console.log(b) //20
//         console.log(x) //50
        
//         bye()

//         function bye(){

//             var c = 30
//             console.log(a) //10
//             console.log(b) //20
//             console.log(x) //50
//             console.log(c) //30

//         }
//     }
// }

// hello()


// Clouser:

// function addition(){
//     return function(){
//         console.log(5+8)
//     }    
// }


// var b = addition()
// console.log(b) // function defination
// b() // 13


// function add(){

//     var a=10
//     var b=20

//     return function sun(){
//        console.log(a-b)
//     }
// }

// var z = add()
// console.log(z) // function defination
// z() // -10


firstName = 'Asma'
age = 5


var z = {
    firstName: 'Shivshree',
    age: 6,
     display:function(){
        console.log(`My Name is ${this.firstName} and age is ${this.age}`)
        // My Name is Shivshree and age is 6

        add()

        function add(){
            console.log(firstName) // Asma
            console.log(age) // 5
            
        }
    }
}

z.display()


/////////////////////////////////////////////////////

var z = {
    firstName: 'Shivshree',
    age: 6,
     display:function(){
        console.log(`My Name is ${this.firstName} and age is ${this.age}`)
        // My Name is Shivshree and age is 6
        var add = () =>{
            console.log(firstName) // Asma
            console.log(age) // 5    
        }
        add()
    }
}

z.display()

// Arrow Function

/////////////////////////////////////////////////////

var z = {
    firstName: 'Shivshree',
    age: 6,
    display:() =>{
        console.log(`My Name is ${this.firstName} and age is ${this.age}`) // this keyword reffers to the global value
        // My Name is Asma and age is 5
        var add = () =>{
            console.log(firstName) // Asma
            console.log(age) // 5    
        }
        add()
    }
}

z.display()















































