// Program 1:

//String = prompt("Please Enter Some String...!!");
// function length(str) {
// 	return str.length;
// }
// document.write(`<b>Length of String is : ${length(String)} </b>`);


//String = prompt("Please Enter Some String...!!");

// function length(str, num = 0) {
//     if(str[num] === undefined) {
//         return num;
//     }
//    return length(str, num + 1)
// }
// document.write(`<b>Length of String is : ${length(String)} </b>`);



//String = prompt("Please Enter Some String...!!");

// function length(str) {
//     document.write(str + ' length is:  '  + str.length);
   
// }
// length(String);



// String = [
//     'sarika',
//     'sayali',
//     'pratiksha'
// ]
// document.write(String.map(String => String.length));


// Program 2:



// String = prompt("Please Enter Some String..");

// function string_to_array(str) 
// {
//     return str.trim().split(" ");
// };
// console.log(string_to_array(String));


// String = prompt("Please Enter Some String..");
// function func(str) { 
//     var array = str.split(" "); 
//     console.log(array);   
// } 
// func(String);


// Program 3:


// String = prompt("Please Enter Some String..");
// const abbreviate = (string, limit) => {
// 	return string.split(" ").map(word => (
// 				 word.length < (limit || 1) ? "" : word[0].toUpperCase()
// 				 )).join("");
// }

// document.write(`<h3>${abbreviate(String)} </h3>`);


// Program 4:

//String = prompt("Please Enter Some String..");

// swapcase = function swapcase(str) {
//     return str.replace(/([a-z]+)|([A-Z]+)/g, function(match, chr) {
//         return chr ? match.toUpperCase() : match.toLowerCase();
//     });
// }

 //document.write(`<h3> SwapCase is: ${swapcase(String)} </h3>`);



// var String = prompt("Please Enter Some String..");
// var ans =  String.split('').map(function(c){
//   return c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()
// }).join('')

// document.write(`<h3> SwapCase is: ${ans} </h3>`);



// Program 5:

//  function insert(main_string, ins_string, pos) 
//  {
//     if(typeof(pos) == "undefined") 
//       {
//          pos = 0;
//       }
      
//     if(typeof(ins_string) == "undefined") 
//      {
//         ins_string = '';
//      }
//     return main_string.slice(0, pos) + ins_string + main_string.slice(pos);
// }
//  document.write(` <h3> ${insert(" We are doing some exercises.")}</h3>`);
//  document.write(`<h3> ${insert('We are doing some exercises.','JavaScript ')}</h3>`);
//  document.write(`<h3> ${insert('We are doing some exercises.','JavaScript ',18)}</h3>`);


// Program 6:


// String = prompt("Enter Some String..");
// function truncate(input) {
//    if (input.length > 5)
//       return input.substring(0,10) + '...';
//    else
//       return input;
// };

// document.write(` <h3> ${truncate(String)} </h3>`);


//  function text_truncate(str, length, ending) 
//  {
//     if (length == null) 
//     {
//       length = 100;
//     }
//         if (ending == null) 
//         {
//             ending = '...';
//         }
//         if (str.length > length) 
//         {
//             return str.substring(0, length - ending.length) + ending;
//         } 
//         else 
//         {
//              return str;
//         }
//   };
//   document.write(` <h3> ${text_truncate('We are doing JS string exercises.')}</h3>`);
//   document.write(` <h3> ${text_truncate('We are doing JS string exercises.',19)}</h3>`);
//   document.write(` <h3> ${text_truncate('We are doing JS string exercises.',15,'!!')}</h3>`);


// Program 7:

// var str = "       Hello World!        ";
// document.write(str.trim());



// function strip(str) {
//     return str.trim();
// }

// document.write(`<h3>${strip('Hiiiii it\s me Gauri..       ')}</h3>`);
// document.write(`<h3>${strip('       From: Sangamner...')}</h3>`);
// document.write(`<h3>${strip('            Currenly I am Live in Pune.....             ')}</h3>`);


// Program 8:

// mood = prompt("Enetr the your mood...");

// function insertWord(word)
// {
//         if(word)
//         {
//                 document.write(`<h3> Today, I am feeling ${mood}....</h3>`);
//         }
//         else
//         {
//                 document.write(`<h3> Today, I am feeling Natural....</h3>`);
//         }
//         return word
// }        

// insertWord(mood)



//mood = prompt("Enetr the your mood...");

// const moodToday = mood => `Today, I am feeling ${mood || 'neutral'}`;

// document.write(`<h3> ${moodToday(mood)}...</h3>`);



// word = prompt("Enetr the your mood ...");

// function moodToday(mood) {
// 	if(!mood) {
// 		return 'Today, I am feeling neutral...'
// 	} else {
// 		return `Today, I am feeling ${mood}....`
// 	}
// }

// document.write(`<h3> ${moodToday(word)}...</h3>`);



// Program 9:


// function hasSpaces(str) {
// 	return str.includes(' ')
// }

// document.write(hasSpaces("      sarika"));
// document.write('<br>');
// document.write(hasSpaces("sarika"));
// document.write('<br>');


// const hasSpace = str => str.includes(" ");

// document.write(hasSpace("      sarika"));
// document.write('<br>');
// document.write(hasSpace("sarika"));
