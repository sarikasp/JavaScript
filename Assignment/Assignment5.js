
// var students = {
//     firstName : 'Sarika',
//     lastName : 'Pansare',
//     age : 22,
//     rollNo : 30,
//     isStudent : true
// }


// for (var key of Object.keys(students))
// {
//     document.write(`${key}  :  ${students[key]}<br>`);
// }


// function result(students)
//     {
//     	var x = "<h4>Student Name : " + students.firstName + "</h4>"
//          x += "<p>Last Name : "+ students.lastName + " </p>";
//          x += "<p> Age : " + students.age + "</p>" ;
//     	 x += "<p> Roll No : " + students.rollNo + "</p>" ;
//     	 x += "<p> IsStudent : " + students.isStudent + "</p>" ;
//     	return x;
//     }
// document.write(result(students));

 
// Program 2:

// add new element in object

// students.technicalSkill = ["JavaScript ","Python"];

// for (var key of Object.keys(students))
// {
//     document.write(`${key}  :  ${students[key]}<br>`);
// }

// change the vaule of existing property

// students.rollNo = 31;

// for (var key of Object.keys(students))
// {
//     document.write(`${key}  :  ${students[key]}<br>`);
// }

// get the length of object

// document.write(Object.keys(students).length);

// print object with key-value pair:

// for (var key of Object.keys(students))
// {
//     document.write(`${key}  :  ${students[key]}<br>`);
// }




// for( var i = 0 ; i < students.length ; i++)
				
// {
//             stud = students[i];
//     if(search==stud.firstName)
//         {
//              message = result(stud);
//              print(message);  	
//         }
// }
 /// var search = prompt("Enter  the Student name");
// console.log(students.firstName)
// 		if( search === students.firstName)
// 				 {
//                         document.write(`${firstName} is Available in the object`);
//                  }
//                  else
//                  {
//                      document.write(`${firstName} is not Available`);
//                  }         


// for(var i = 0 ; i < students.length ; i++){
//     student = students[i];
//     if(search.toLowerCase() === student.name ){
//       studentsArray.push(student);
//       message = getStudentReport(student);
//       print(message);
//     }
// }




// function invert_key_value(obj) {
//     var result = {};
//     var keys = _keys(obj);
//     for (var i = 0, length = keys.length; i < length; i++) {
//       result[obj[keys[i]]] = keys[i];
//     }
//     return result;
//   }
// function _keys(obj) 
//   {
//     if (!isObject(obj)) return [];
//     if (Object.keys) return Object.keys(obj);
//     var keys = [];
//     for (var key in obj) if (_.has(obj, key)) keys.push(key);
//     return keys;
//   }
// function isObject(obj) 
//  {
//     var type = typeof obj;
//     return type === 'function' || type === 'object' && !!obj;
//   }
// console.log(invert_key_value({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}));

// // Program 6:

// var recipe = {
//   'title': 'Mole',
//   'servings': 2,
//   'ingredients': ['cumin', 'cinnamon', 'cocoa']
// };

// document.write(recipe.title);
// document.write("<br>");
// document.write('Servings: ' + recipe.servings);
// document.write("<br>");
// document.write('Ingredients:');
// for (var i = 0; i < recipe.ingredients.length; i++) {
//   document.write(recipe.ingredients[i]);
// }

// // Program 7:

// var books = [
//   {
//     title: 'The Design of EveryDay Things',
//     author: 'Don Norman',
//     alreadyRead: false
//   },
//   {
//     title: 'The Most Human Human',
//     author: 'Brian Christian',
//     alreadyRead: true
//   }];

// for (var i = 0; i < books.length; i++) 
// {
//   var book = books[i];
//   var bookInfo = book.title + '" by ' + book.author;
//   document.write("<br>");
//   if (book.alreadyRead) 
//    {
//      document.write('You already read "' + bookInfo );
//    } 
//   else 
//   {
//     document.write('You still need to read "' + bookInfo);
//   }
// }

// program 8:

// var length;
// var width;
// var height;
// var amountVolume = 0;
// function calculateVolume(length, width, height) 
// {
//   amountVolume = parseFloat(length) * parseFloat(width) * parseFloat(height);
//   return amountVolume;
// };

// document.write(calculateVolume(2,3,4));





















