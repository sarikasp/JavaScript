// // Program 1:

// keysAndValue = ({ 
//       1: 'sarika', 
//       2: 'pratiksha',
//       3: 'sayali' 
//     })


// // function keysAndValues(obj) {
// //     var k = [];
// //     var o = [];
// //     for (var i in obj){
// //       k.push(i);
// //       o.push(obj[i]);
// //     }
// //     return [k,o];
// //   }

// // var keyValue = keysAndValues(keysAndValue);
//   document.write(keyValue);


// // Way 2:

// function keysAndValues(obj) {
//     var keys = Object.keys(obj);
//     return [keys, keys.map( key => obj[key] )];
//   }

//   var keyValue = keysAndValues(keysAndValue);
//   console.log(keyValue);


// // Program 2:


// shoppingList =
//  { 
//     "Body Spray": 250,
//      "Shampoo": 150,
//       "Straightener":  950,
//       "Goggle": 500,
//       "Wallet" : 450
//  }


// // function freeShipping(order) {
// // 	var totalCost = 0;
// // 	for(item in order){
// // 		totalCost += order[item];
// // 	}
// // 	return totalCost >= 500;
// // }

// function freeShipping(order) {
// 	let total = 0;
//   for(const key in order){
// 	let value = order[key];
//       total += value;  
// 	}
//   return total >= 50;
// }

// var shippingCharge = freeShipping(shoppingList);
//   console.log(shippingCharge);


// // Program 3:


// manBudgets = ([
//     { name: "John", age: 21, budget: 23000 },
//     { name: "Steve",  age: 32, budget: 40000 },
//     { name: "Martin",  age: 16, budget: 2700 }
//   ])

// //   function getBudgets(arr) {
// // 	sum = 0
// // 	for (let i=0; i <arr.length; i++) {
// // 		sum += arr[i].budget
// // 	}
// // 	return sum 
// // }

// // // Way 2:

// const getBudgets = arr => arr.reduce((a,b) => a + b.budget, 0);

// var totalBudgets = getBudgets(manBudgets);
// console.log(" Total Budgets : ",totalBudgets);



// // Program 4:


sarika = {
    name: "sarika",
    phone: 0987654321,
    email: "sarika@gmail.com"
  }
  
  // The second object parameter.
  pratiksha = 
  {
    name: "prati",
    phone: 1234567890,
    email: "prati@gmail.com"
  }
  
  function isEqual(objOne, objTwo) 
  {
      let keys1 = Object.keys(objOne); 
      let keys2 = Object.keys(objTwo); 
  
      if(keys1.length === keys2.length)
      {
          for(let i = 0; i < keys1.length; i++)
          {
              let k = keys1[i]; 
          if(k!==keys2[i]) return false;
              if(typeof objOne[k] !== typeof objTwo[k]) 
                   return false;
              if(typeof objOne[k] == "object") {
                  if(!isEqual(objOne[k],objTwo[k])) 
                  return false;
              }
              else if(objOne[k] !== objTwo[k])
                  {
                                  
                      return false; 
                  }
          }
  
          return true; 
      }
       else
      {
          return false; 
      }
      
  }


// // // Way 2: 


//   const isObj = o => typeof o === 'object'

//   function isEqual(a, b) {
//       return Object.keys(a).every((k, i) => {
//           if (Object.keys(b).indexOf(k) !== i) 
//           return false
//           const c = a[k], d = b[k]
//           if (isObj(c) && isObj(d)) {
//               return isEqual(c, d)
//           } else return c === d
//       })
//   }

var equal = isEqual(sarika, pratiksha);
console.log(equal);




// // Program 5:

// penguin = {   
//     chirp : function() {
//         return console.log("CHIRP.....CHIRP!!!")
//       }
// }
// penguin.chirp();



// // Program 6:

// var z = prompt("enter you want fly or not");

// penguin = {   
//     fly : function() {
//             if(z.toUpperCase() == 'FLY')
//             {
//                    x = "I Can Fly........";
//             }
//             else
//             {
//                     x = "No Flying for me....!!!!";
//             }
//         return console.log(x);
//       }
// }
// penguin.fly();

