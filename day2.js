// document.write(" Hiiii it's me Gauri, Papa's Princess.....");

// // Arithmetic Operators:
	
// var age = 22;
// var currentYear = 2020;

// document.write(`<h1>*******Arithmetic Operation********</h1> `);

// document.write(`<h3>Your Birth Year is ${ currentYear - age}<br>`);

// document.write(`Your after 5 years of your Birth is ${ currentYear - age + 5}<br>`);

// document.write(`Double of Your Age is ${ age * 2 }<br>`);

// document.write(`1 third of Your Age is ${ age / 3 }<br>`);

// document.write(`Is Your Age Completely Divisible by 10 is ${ age % 10 }<br>`);




// var ticketPrice = 100;
// var numOfTickets = parseInt(prompt("Please enter the number of tickets???"));
// if(numOfTickets >  30)
// 	{
// 		totalAmt=numOfTickets*ticketPrice;
// 		discAmt=(totalAmt/100)*50;
// 		finalAmt = totalAmt-discAmt;
// 		document.write(`<h2>You got 50% tickets....${finalAmt}</h2>`);
// 	}
// else if(numOfTickets >= 21 && numOfTickets <= 30)
//    {
//    		totalAmt=numOfTickets*ticketPrice;
// 		discAmt=(totalAmt/100)*30;
// 		finalAmt = totalAmt-discAmt;
//    		document.write(`<h2>You got 30% tickets....${finalAmt}</h2>`);
//    }
// else if(numOfTickets >= 11 && numOfTickets <= 20)
// 	{
// 		totalAmt=numOfTickets*ticketPrice;
// 		discAmt=(totalAmt/100)*20;
// 		finalAmt = totalAmt-discAmt;
// 		document.write(`<h2>You got 20% tickets....${finalAmt}</h2>`);
// 	}
// else if(numOfTickets >= 5) 
// 	{
// 		totalAmt=numOfTickets*ticketPrice;
// 		discAmt=(totalAmt/100)*10;
// 		finalAmt = totalAmt-discAmt;
// 		document.write(`<h2>You got 10% tickets....${finalAmt}</h2>`);
// 	}
// else	
// 	{
// 		document.write("you have no discount....!!!")
// 	}







// // // 	Logical Operator :


// AND -----------> &&
// OR  -----------> ||
// NOT -----------> !=
 
// // AND Operator

//  True + True = True
//  True + False = False
//  False + True = False
//  False + False = False

// // OR Operator 

//  True + True = True
//  True + False = True
//  False + True = True
//  False + False = False

// // NOT Operator 

// True = False
// False = True


// var person = {
// 	name : 'sarika',
// 	age : 22 
// }
// document.write(typeof(person));   // object

// function person(name,age) {
// 	this.name = name;
// 	this.age = age;
// }

// var sarika = new person("gauri",22);
// document.write(typeof(sarika));  //  object



// var ticketPrice = 200;
// var discount = 0;
// var numOfTickets = parseInt(prompt("Please enter the number of tickets???"));
// if(numOfTickets > 5 )
// 	{
		
// 		discount = ticketPrice * 0.2;
// 		document.write(`<h2>You got 20% discount tickets....${discount}</h2>`);
// 	}
// else
// 	{
//    		document.write(`<h2>You got 50% tickets....${discount}</h2>`);
// 	}



// var ticketPrice = 100;
// var discount = 0;
// var numOfTickets = parseInt(prompt("Please enter the number of tickets???"));
// if(numOfTickets <= 10 )
// 	{
// 		totalAmt = ticketPrice*numOfTickets;
// 		discount = totalAmt * 0.2;
// 		//console.log(discount);
// 		finalAmt = totalAmt-discount;
// 		document.write(`<h2>You got 20% discount tickets....${finalAmt}</h2>`);
// 	}
// else if(numOfTickets >= 11 && numOfTickets <= 20)
//    {
//    		totalAmt = ticketPrice*numOfTickets;
// 		discount = totalAmt * 0.3;
// 		//console.log(discount);
// 		finalAmt = totalAmt-discount;
//    		document.write(`<h2>You got 30% tickets....${finalAmt}</h2>`);
//    }
// else
// 	{
// 		totalAmt = ticketPrice*numOfTickets;
// 		discount = 0.5*ticketPrice;
// 		//console.log(discount);
// 		finalAmt = totalAmt-discount;
//    		document.write(`<h2>You got 50% tickets....${finalAmt}</h2>`);
// 	}





















