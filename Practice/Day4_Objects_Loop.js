// console.log('Hello')


// var name="Sarika"
// var age = 22
// var language = 'Marathi'


// var obj ={

//     printMessage:function(){
//         console.log(age,name,language) //12 22 "Sarika" "Marathi"
//     }
// }
// obj.printMessage()


// var obj ={

//     name: "Sarika",
//     age: 22,
//     language: 'Hindi',
//     printMessage:function(){
//         console.log(this.age,this.name,this.language) // 22 "Sarika" "Hindi"
//     }
// }
// obj.printMessage()


var students = [
    {
        firstName:'Sarika',
        lastName:'Pansare',
        age:35,
        languages:'Urdu',
        skills:['django','c','cypress','c++','selenium3','java3']

    },

    {
        firstName:'Chinmay',
        lastName:'deshpande',
        age:30,
        languages:'Hindi',
        skills:['python','django','c','cypress','c++','selenium','java']

    }

    // {
    //     firstName:'Sayli',
    //     lastName:'Pisal',
    //     age:25,
    //     languages:'English',
    //     skills:['python','django2','c','cypress','c++','selenium2','python2','python3']

    // },

    // {
    //     firstName:'Pratiksha',
    //     lastName:'Raut',
    //     age:23,
    //     languages:'Hindi',
    //     skills:['python','django','c','cypress','c++','selenium3','java3']

    // },

    // {
    //     firstName:'Asma',
    //     lastName:'deshpande',
    //     age:33,
    //     languages:'Urdu',
    //     skills:['python','django','c','cypress','c++','selenium3','java3']

    // }
]

var user = []
for(let i = 0; i < students.length; i++){
    var z = students[i]
    for(var a in z){
        // console.log(a)
        if(a === 'skills'){
            var lang = z[a]
            // console.log(lang)
            for(let j = 0; j<lang.length; j++){
                // console.log(lang[j])
                if(lang[j] == 'python' && lang[j] =='cypress')
                {
                    user.push(z.firstName)
                }
            }
            
        }

    }
}

console.log(user)

// var pythonSkill = []
// for(var i = 0; i < students.length; i++){
//     var a = students[i]
//     {
//         for(var key in a){
//             if(key === 'skills'){
//                 var lang = a[key]
//                 for(var j = 0; j < lang.length; j++){
//                    if(lang[j] == 'python' && lang[j] == 'cypress'){
//                         // pythonSkill.push(a.firstName)
//                         console.log(lang[j])
//                     }
//                 }           
//             }
//         }
//      }
// }
// console.log(pythonSkill)



// var pythonSkill = []
// for(let i = 0; i < students.length; i++){
//     var a = students[i]
//     {
//         for(var key in a){
//             if(key === 'skills'){
//                 var lang = a[key]
//                 for(let i = 0; i < lang.length; i++){
//                     if(lang[i] === 'python'){
//                         pythonSkill.push(a.firstName)
//                     }
//                 }
//             }
//         }
//     }
// }
// console.log(pythonSkill)
// // for(var i = 0; i < pythonSkill.length; i++){
// //     console.log(pythonSkill[i])
// // }


// // Number of Skills per User

// peopleWithHindi = []
// for(var i = 0; i < students.length; i++){
//     var a = students[i]

//     if(a.languages === 'Hindi'){
//         peopleWithHindi.push(a.firstName)
//     }
// }

// console.log(peopleWithHindi)



// // Total length of skills per Students

// peopleWithHindi = []
// for(var i = 0; i < students.length; i++){
//     var a = students[i]
//     console.log(`${a.firstName} : ${a.skills.length}`)
// }


// // Average of Students

// var sum = 0

// peopleWithHindi = []
// for(var i = 0; i < students.length; i++){
//     var a = students[i]
//     sum = sum + a.age
// }

// avg = sum / students.length
// console.log(avg)










