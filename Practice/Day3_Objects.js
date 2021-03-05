// Objects:

// var obj = {

//         name:"Gauri",
//         age:22,
//         rollNumber:30
// }

// // 2 ways to fetch the value 

// // Dot notation 
// console.log(obj.name)

// // sqaure notation
// console.log(obj["name"])


// var flowers = ["Orchid","Lily","Rose","Jasmine","Lotus","Tulips"]
// console.log(flowers[0])

// // looping through array 

// for(var i = 0; i < flowers.length; i++){
//     console.log(flowers[i])
// }

// var person = ["Gauri",22,30]
// for(var i = 0; i < person.length; i++){
//     console.log(person[i])
// }


// obj stores the value by key-value pair

// var person = {

//         name:"Gauri",
//         age:22,
//         rollNumber:30
// }

// // person.name   # not allowed in for loop
// console.log(person['name'])

// for(var key in person){
//     console.log(key) // display only key like: name, age, rollNumber
//     console.log(key, person[key])
// }


console.log('**********************************')

var obj = {
    name:"Sarika",
    age:22
}


for(var  i in  obj){
   // console.log(i) // print only key
  //  console.log(obj[i]) // print only value
   console.log(i, obj[i]) // print key with value
}

console.log('**********************************')

var person2 = {

    name:"Gauri",
    age:22,
    skills:["Python","Javascript","Angular","CSS3","Html"],
    family:{
        father:"Shankar Pansare",
        mother:"Pushpa Pansare",
        sister:"Swana Pansare",
        location:["Sangamner","Shirdi","Akole"]
    }
}


console.log(person2.family.father) // Shankar Pansare

console.log(person2.skills[3]) // CSS3
console.log(person2.skills.length) // 5

var n = person2.skills
console.log(n[2]) // Angular

console.log('**********************************') 

for(var key1 in person2){
    if(key1 == 'skills'){
        var arr = person2[key1]
        for(var i = 0; i < arr.length; i++){
            console.log(arr[i])
        }
    }
}

// output
// Python
// Javascript
// Angular
// CSS3
// Html

console.log('**********************************') 

for(var key1 in person2){
    if(key1 == 'skills'){
        for(var i = 0; i <  person2[key1].length; i++){
            console.log(arr[i])
        }
    }
}

// output
// Python
// Javascript
// Angular
// CSS3
// Html

console.log('**********************************') 

for(var key1 in person2){
    if(key1 == 'family'){
        var x = person2[key1]
        for(var key2 in x){
            console.log(key2, x[key2])
        }
    }
}

// output
// father Shankar Pansare
// mother Pushpa Pansare
// sister Swana Pansare
// location (3) ["Sangamner", "Shirdi", "Akole"]

console.log('**********************************') 

for(var key1 in person2){
    if(key1 == 'family'){
        var s = person2[key1]
        for(var key2 in s){
            if(key2 == 'sister'){
                console.log(key2, s[key2])
            }
        }
    }
}

// output
// sister Swana Pansare

console.log('**********************************')

for(var key1 in person2){
    if(key1 == 'family'){
        var z = person2[key1]
        for(var key2 in z){
            if(key2 == 'location'){
                var arr = z[key2]
                for(var i = 0; i < arr.length; i++){
                    console.log(arr[i])
                }
            }
        }
    }
}

// output
// Sangamner
// Shirdi
// Akole

