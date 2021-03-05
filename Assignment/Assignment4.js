// // Program 1:

// var array = ['rose', 'lotus', 'orchid', 'jasmine', 'lily', 'daisy'];
// var flower = prompt("Please Enter the flower name...!!!");
// function find(flower)
// {
//        if(array.indexOf(flower) > -1)
//              {
//                 document.write(`<h3>${flower} is Available in the Array..</h3>`);   
//              }
//         else
//             {
//                 document.write(`<h3>${flower} is Not Available in the Array...</h3>`);  
//              }
// }
// find(flower);

// // // Program 2:

// var fruitsArray = ["Apple", "Banana", "Cherry", "Orange"];
// var plusFruits = fruitsArray.join(" + ")
// var spaceFruits = fruitsArray.join(" ")
// var commaFruits = fruitsArray.join(" , ")
// document.write(`<b> " ${commaFruits} " </b>`);
// document.write("<br>");
// document.write(`<b> " ${spaceFruits} " </b>`);
// document.write("<br>");
// document.write(` <b> "  ${plusFruits} " </b>`);


// // Program 3:
 
// // // way 1:

// var num = [1,2,3,4,5];

// document.write(`<h2>${num} </h2>`);

// var sum = 0;
// function sumOfCube1(num)
// {
//     for(var i = 1 ; i<= num.length; i++)    
//     {
//             sum += Math.pow(i,3);   
//     }
//     return sum;
// }
// document.write(`<h2> ${sumOfCube1(num)} </h2>`);

// // // way 2:

// function sumOfCube2(n)
// { 
//     sum1 = 0;
//     for(var i = 1 ; i<= n; i++)    
//     {
//             sum1 += Math.pow(i,3);   
//     }
//     return sum1;
// }
// document.write(`<h2> ${sumOfCube2(5)} </h2>`);

// // // Way 3:

// function sumOfCube3(n)
// {
//     var sum2 = 0;
//     for(var i = 1 ; i<= n; i++)    
//     {
//             sum2 += i ** 3;  
//     }
//     return sum2;
// }
// document.write(`<h2> ${sumOfCube3(5)} </h2>`);


// // Program 4:

// flowers = ['Rose', 'Lily', 'Tulip', 'Orchid', 'Rose', 'Orchid', 'Daisy', 'Orchid'];

// var t1 = 1;
// var t2= 0;
// var item;

// for(var i = 0; i< flowers.length; i++)
// {
//     for(var j = i; j< flowers.length; j++) 
//     {
//         if(flowers[i] == flowers[j]) 
//             {
//                 t2++;
//             }
//         if(t1 < t2)
//             {
//                 t1 = t2;
//                 item = flowers[i];
//             }
//     }
//     t2 = 0;
// }
// document.write(`<h2> ${item} - ${t1} times </h2>`);


// // Program 5:


// var firstName = ['Rajesh', 'Kirti', 'Pallavi', 'Aman']
// var lastName = ['Menon', 'Sharma', 'Roy', 'Varma'];
// var fullName = [];

// for(var i = 0 ; i< firstName.length; i++)
// {
//         fullName.push((firstName[i] +' ').concat(lastName[i]))
// }

// for(var j = 0 ; j< fullName.length; j++)
// {
//    document.write("<br>");
//    document.write(`<h3>" My Name is  ${fullName[j]} "<//h3>`);   
// }



var firstName = [
                        ['Rajesh', 'Pallavi', 'Aman'],
                        ['Menon', 'Roy', 'Varma'], 
                        [24, 35, 29]
                ];
var fullName = [];
for(var i = 0 ; i< firstName.length; i++)
{
       
for(var j = 0 ; j < i; j++)
   {
        fullName.push((firstName[i] +' ').concat(firstName[j]))
        for(var k = 0 ; k < j ; k++)
        {
                fullName.push((firstName[j] +' ').concat(firstName[k]));
        }
   }
}

for(var s = 0 ; s< fullName.length; s++)
{
   document.write("<br>");
   document.write(`<h3>" My Name is  ${fullName[s]} "<//h3>`);   
}





// // Program 1:
//       
// var largestWord = prompt("Enter the string...")
// function findLargeString(string)
// {
//     var str = string.split(" ");
//     var longest = 0;
//     var word;
//     for ( var i = 0; i < str.length; i++)
//     {
//         if(str[i].length > longest)
//         {
//             longest = str[i].length;
//             word = str[i]
//         }
//     }
//     return word;
// }
// document.write(`<b>Largest word in this String is: ${findLargeString(largestWord )} </b>`);



// // Program 2:

// var a = parseInt(prompt("Enter the first Numbers..."));
// var b = parseInt(prompt("Enter the second Numbers..."));
 
// function add()
// {
//     return a+b ;
// }

// function sub()
// {
//     return a-b ;
// }

// function multi()
// {
//     return a*b ;
// }

// function div()
// {
//     return a/b ;
// }


// document.write(`<b> Addition:  ${add()} </b><br>`);
// document.write(`<b> Substraction:  ${sub()} </b><br>`);
// document.write(`<b> Multiplication:  ${multi()} </b><br>`);
// document.write(`<b> Division:  ${div()} </b>`);




// var a = parseInt(prompt("Enter the first Numbers..."));
// var b = parseInt(prompt("Enter the second Numbers..."));

// function add()
// {
//     var add = a+b-a/b*a ;
//     return (add);
// }
// document.write(`<b> Addition:  ${add()} </b><br>`);


// // // Program 3:

// var findVowels = prompt("Enter some string..")

// function getVowels(str)
// {
//     var vowelCount = 0;
//     var string = str.toString();
//     for(var i = 0; i< string.length; i++)
//     {
//         if(string.charAt(i) == 'a' || string.charAt(i) == 'e' || 
//             string.charAt(i) == 'i' || string.charAt(i) == 'o' || string.charAt(i) == 'u')
//         {
//             vowelCount += 1;

//         }
//     }
//     return vowelCount;
// }
// document.write(`<b> Vowels in this String is:  ${getVowels(findVowels)}</b>`);




//  // // Program 4:

//  var right = parseInt(prompt("Enter the right Number..."));
//  var left = parseInt(prompt("Enter the left Number..."));

//  function numbers()
//  {
    
//  for(var i = right; i <= left; i++)
//  {
    
//     document.write(`<b>${i} </b><br>`);
//  }
// return 0;
// }


// numbers();


// // // Program 5:

// var firstName = prompt("Enter the right Number...");
// var lastName = prompt("Enter the left Number...");

// function fullName()
// {
//     return (firstName + lastName);
// }

// document.write(`<b>Full Name is: ${fullName(firstName,lastName)} </b>`)





