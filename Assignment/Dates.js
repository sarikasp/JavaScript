// // Program 1:

// // Way 1:

// var numOfMonth = prompt("Enter the Number Of Month??");

// function monthName(num) {
// 	let months = {
// 		1:"January",
// 		2:"February",
// 		3:"March",
// 		4:"April",
// 		5:"May",
// 		6:"June",
// 		7:"July",
// 		8:"August",
// 		9:"September",
// 		10:"October",
// 		11:"November",
// 		12:"December"
// 	}
// 	return months[num]
// }


// var result = monthName(numOfMonth);
// document.write(`<h2> ${numOfMonth} : Month is ${result} </h2>`);


// // Way 2:


// var numOfMonth = prompt("Enter the Number Of Month??");

// function monthName(num) {
//     let monthArray = ['January', 'February', 'March', 'April', 'May', 'June',
//                      'July', 'August', 'September', 'October', 'November', 'December'];
// 	let month = monthArray[num -1]
// 	return month
// 	}


// var result = monthName(numOfMonth);
// document.write(`<h2> ${numOfMonth} : Month is ${result} </h2>`);


// // Program 2:


// // Way 1:


// var numOfYear = prompt("Enter the Number Of Year??");

// function isLeap(year) {
// 	if((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)){
// 		return true;
// 	}else {
// 		return false;
// 	}
// }
// var result = isLeap(numOfYear);
// document.write(`<h2> ${numOfYear} isLeapYear : ${result} </h2>`);


// // Way 2:


// var numOfYear = prompt("Enter the Number Of Year??");

// function isLeap(year) {
// 	return year % 4 == 0 &&  year % 100 !== 0 || year % 400 == 0;
// }

// var result = isLeap(numOfYear);
// document.write(`<h2> ${numOfYear} isLeapYear : ${result} </h2>`);



// // Program 3:


// var is_date = function(input) 
//   {
//     if ( Object.prototype.toString.call(input) === "[object Date]" ) 
//     {
//         x = "Date is Object........";
//     }
//     else
//     {
//         x = "Date is Not Object........";  
//     }   
//     return document.write(`<h2>${x}</h2>`); 
//   };
  
//  is_date(new Date(86400000));
//  is_date([1, 2, 4, 0]);
//  is_date(new Date(86400000));
//  is_date("October 13, 2014 11:13:00")


// // Program 4:

// // Way 1:


// var date1 = prompt("Enter the First Date");
// var date2 = prompt("Enter the Second Date");


// var compare_dates = function(dt1,dt2)
// {
//     if (dt1 > dt2) 
//         {
//             document.write("<h3> Date1 Is Greate Than Date2 </h3>");
//         }
//     else if (dt1 < dt2) 
//         {
//             document.write("<h3> Date2 Is Greate Than Date1 </h3>");
//         }
//     else 
//     {
//         document.write("<h3> Date1 Is Equal To Date2 </h3>"); 
//     }   
//  }

//  compare_dates(date1,date2);


// // Way 2:


// var g1 = new Date(2019, 08, 03); 
// var g2 = new Date(2019, 08, 03); 

// var g1 = new Date(); 
// var g2 = new Date(); 
// if (g1.getDate() === g2.getDate()) 
//     document.write("Both  are equal");      
// else if (g1.getDate() > g2.getDate()) 
//     document.write("g1 is greater than g2"); 
// else
//    document.write("g1 is lesser than g2");










// Way 1:

const activities = [
    { 
    title: 'Hiking', 
    date: new Date('2019-06-28') 
    },
    {
     title: 'Shopping', 
     date: new Date('2019-06-10') 
    },
    {
    title: 'Trekking', 
    date: new Date('2019-06-22') 
    }
  ]


const sortedActivities = activities.sort((a, b) => a.date - b.date)

console.log(sortedActivities);


// // // Way 2:

//   var arr = [{
//     "Shopping": "2012-01-01",
//     "Body-Spray": "Shades"
//   },
//   {
//     "Shopping": "2012-01-09",
//     "Goggle": "Ray-Ban"
//   },
//   {
//     "Shopping": "2012-01-05",
//     "Watch": "G-Shock"
//   }
// ]

// arr.sort(function(a, b) {
//   var keyA = new Date(a.Shopping),
//     keyB = new Date(b.Shopping);
//   // Compare the 2 dates
//   if (keyA < keyB) return -1;
//   if (keyA > keyB) return 1;
//   return 0;
// });

// console.log(arr);












