var randomNumber = Math.floor((Math.random()*6)+1);
console.log(randomNumber);
var guessNumber = parseInt(prompt("Please guess the random number.."));

// *****************************************************************************************

// if(randomNumber == guessNumber)
//     {
//         document.write("You guess it correctly....");
//     }
// else if(randomNumber != guessNumber)
// {
//     guessNumber = parseInt(prompt("Please guess the random number.."));
//     if(randomNumber == guessNumber)
//     {
//         document.write("You guess it correctly....");
//     }
// }
// else if(randomNumber != guessNumber)
// {
//     guessNumber = parseInt(prompt("Please guess the random number.."));
//     if(randomNumber == guessNumber)
//     {
//         document.write("You guess it correctly....");   
//     }
// }

// **********************************************************************************************

// For Loop

// for(var i = 0; i < 3; i++)
// {
//     if(randomNumber == guessNumber)
//     {
//         document.write("You guess it correctly....");
//         break;
//     }
//     guessNumber = parseInt(prompt("Please guess the random number.."));
// }

// ***********************************************************************************************

// While Loop

// while(true)
// {
//     if(randomNumber == guessNumber)
//     {
//         document.write("You guess it correctly....");
//         break;
//     }
//     guessNumber = parseInt(prompt("Please guess the random number.."));
// }

// while(randomNumber != guessNumber)
// {
//     if(randomNumber == guessNumber)
//     {
//         document.write("You guess it correctly....");
//         break;
//     }
//     guessNumber = parseInt(prompt("Please guess the random number.."));
// }

// **********************************************************************************************************

// Flag:

var correctGuess;

if(randomNumber == guessNumber)
    {
        correctGuess = true;
    }
else if(randomNumber != guessNumber)
{
    guessNumber = parseInt(prompt("Please guess the random number.."));
    if(randomNumber == guessNumber)
    {
        correctGuess = true;
    }
}
else if(randomNumber != guessNumber)
{
    guessNumber = parseInt(prompt("Please guess the random number.."));
    if(randomNumber == guessNumber)
    {
        correctGuess = true;   
    }
}

if(correctGuess)
{
    document.write("You guess is correctly....");
}
else
{
    document.write("You guess is not correctly....");
}


// **********************************************************************************************************

// Break & Continue:

// Continue:

// var list = ["sarika", "pratiksha", "chinmay", "deva"];

// for(var i = 0; i < list.length; i++)
// {
//     if(list[i] === 'pratiksha')
//     {
//         continue;
//     }
//     document.write(list[i])
// }

// Break:

// var list = ["sarika", "pratiksha", "chinmay", "deva"];

// for(var i = 0; i < list.length; i++)
// {
//     if(list[i] === 'pratiksha')
//     {
//         break;
//     }
//     document.write(list[i])
// }














