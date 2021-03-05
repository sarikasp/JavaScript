// ///////////////////////////////////////////////
// // Function Returning Function:

// function interviewQun(job)
// {
//     if('job' === 'designer')
//     {
//         return function(name)
//         {
//             document.write(name + ' , can you please explain what UX design is?');
            
//         }
//     }
//     else if('job' === 'teacher')
//     {
//         return function(name)
//         {
//             document.write("What Subjec do you each, " + name + "?");
//         }
//     }
//     else
//     {
//         return function(name)
//         {
//             document.write("Hello " + name + ", what do you do?");
//         }
//     }
// }

// var teacherQuestion = interviewQun('teacher');
// var designerQuestion = interviewQun('designer');

// teacherQuestion('John');
// document.write("<br>");
// designerQuestion('Mark');
// document.write("<br>");
// interviewQun('teacher')('Mark');


///////////////////////////////////////////////
// // IIFE:

// function game()
// {
//     var score = Math.random() * 10;
//     document.write(`<b> ${score >= 50} </b>`);
//     document.write("<br>");
// }
// game();
// (function() {
// var score = Math.random() * 10;
// document.write(`<b> ${score >= 5} </b>`);
// document.write("<br>");
// })();

// //document.write(score)

// (function(goodLuck)
// {
//     var score = Math.random() * 10;
//     document.write(`<b>${score >= 5 - goodLuck}</b>`);
// })(5);


///////////////////////////////////////////////
// // Clousers:

// function retirement(retirementAge)
// {
//     var a = ' years left until retirement.';
//     return function(yearOfBirth)
//     {
//         var age = 2020 - yearOfBirth;
//         document.write(`<h3> ${(retirementAge - age) + a} </h3>`);
//     }
// }

// var retirementUS = retirement(66);
// var retirementGermany = retirement(65);
// var retirementIceland = retirement(67);
// retirementUS(1990);
// retirementGermany(1990);
// retirementIceland(1990);



// function interviewQun(job)
// {
//     if('job' === 'designer')
//     {
//         return function(name)
//         {
//             document.write(name + ' , can you please explain what UX design is?');
            
//         }
//     }
//     else if('job' === 'teacher')
//     {
//         return function(name)
//         {
//             document.write("What Subjec do you each, " + name + "?");
//         }
//     }
//     else
//     {
//         return function(name)
//         {
//             document.write("Hello " + name + ", what do you do?");
//         }
//     }
// }


// interviewQun('teacher')('Mark');


///////////////////////////////////////////
// // Bind, call and apply

// var chinmay = {
//     name : 'Chinmay',
//     age : 29,
//     job : 'teacher',
//     presentation: function(style, timeOfDay)
//     {
//         if(style === 'formal')
//         {
//             document.write(`<h3>Good ${timeOfDay} , Ladies and gentlement! I\m ${this.job} and I\m ${this.age} years old</h3>`);
//             document.write("<br>");
//         }
//         else if(style === 'friendly')
//         {
//             document.write(`<h3>'Hey! What\'s up? I\'m ${this.name} , I\m ${this.job} and I\m ${this.age} years old.  Have a nice Day ${timeOfDay} . </h3>`);
//             document.write("<br>");
//         }  
//     }
// };

// var sayali = 
// {
//     name : "Sayali",
//     age : 25,
//     job : "Developer"
// };

// chinmay.presentation('formal', 'morning');
// chinmay.presentation.call(sayali, 'friendly', 'afternoon');
// var chinmayFriendly = chinmay.presentation.bind(sayali, 'formal');
// sayaliFormal('afternnon');



// Example 2:

// var years = [1990, 1965, 1937, 2005, 1998];
// function arrayClac(arr, fn)
// {
//     var arrRes = [];
//     for(var i = 0 ; i < arr.length; i++)
//     {
//         arrRes.push(fn(arr[i]));
//     }
//     return arrRes;
// }

// function calculateAge(el)
// {
//     return 2020 - el;
// }

// function isFullAge(limit, el)
// {
//     return el >= limit;
// }

// var ages = arrayClac(years, calculateAge);
// var fullJapan = arrayClac(ages, isFullAge.bind(this, 20));
// document.write(`<h3> ${ages} </h3>`);
// document.write(`<h3> ${fullJapan} </h3>`);


//////////////////////////////////////////////////////////////

// Coding Challenge:

// 1. Build a function constructor called Question to describe a question. A question should include:
// a) question itself
// b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
// c) correct answer (I would use a number for this)
// 2. Create a couple of questions using the constructor
// 3. Store them all inside an array
// 4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).
// 5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.
// 6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).
// 7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).



// (function()
// {
//     function Qun(question, answer,correctAns)
//     {
//          this.question = question;
//          this.answer = answer;
//          this.correctAns = correctAns;
//     }
// Qun.prototype.displayQun = function(ans)
// {
//         console.log(this.question);
//         for(var i = 0; i < this.answer.length; i++)
//         {
//             console.log(i + ':' + this.answer[i]);
//         }
// }

// Qun.prototype.checkAnswer = function(ans)
// {
//     if(ans === this.correctAns)
//     {
//         console.log('Correct Answer....');
//     }
//     else
//     {
//         console.log('Wrong Answer....Try Again');
//     }
// }

// var q1 = new Qun('Is JavaScript the coolest programming language in the world?',
//                 ['Yes', 'No'],
//                 0);

// var q2 = new Qun('What is the name of this course\'s teacher?',
//                 ['Chinmay', 'Amol', 'Ankur'],
//                 2);

// var q3 = new Qun('What does best describe coding?',
//                 ['Boring', 'Hard', 'Fun'],
//                 2);

// var Question = [q1, q2, q3];
// var n = Math.floor(Math.random() * Question.length);
// Question[n].displayQun();

// var answer = parseInt(prompt('Please select the correct answer...'));
// Question[n].checkAnswer(answer);
// })();



// 8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)
// 9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.
// 10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).
// 11. Display the score in the console. Use yet another method for this.


(function()
{
    function Qun(question, answer,correctAns)
    {
         this.question = question;
         this.answer = answer;
         this.correctAns = correctAns;
    }
    Qun.prototype.displayQun = function()
    {
        console.log(this.question);
        for(var i = 0; i < this.answer.length; i++)
        {
            console.log(i + ':' + this.answer[i]);
        }
    }

    Qun.prototype.checkAnswer = function(ans, callback)
    {
        var sc;
        if(ans === this.correctAns)
        {
            console.log('Correct Answer....');
            sc = callback(true);
        }
        else
        {
            console.log('Wrong Answer....Try Again');
            sc = callback(false);
        }
        this.displayScore(sc);
    }
    Qun.prototype.displayScore = function(score) 
    {
        console.log('Your current score is: ' + score);
        console.log('------------------------------');
    }
    
var q1 = new Qun('Is JavaScript the coolest programming language in the world?',
                ['Yes', 'No'],
                0);

var q2 = new Qun('What is the name of this course\'s teacher?',
                ['Chinmay', 'Amol', 'Surabhi'],
                1);

var q3 = new Qun('What does best describe coding?',
                ['Boring', 'Hard', 'Fun'],
                2);

var Question = [q1, q2, q3];

function score()
{
    var sc = 0;
    return function(correctAns)
    {
        if(correctAns)
        {
            sc++;
        }
        return sc;
    }
}
var keepScore = score();

function nextQuestion()
{
    var n = Math.floor(Math.random() * Question.length);
    Question[n].displayQun();

    var answer = prompt('Please select the correct answer...');
    if(answer !== 'exit')
    {
        Question[n].checkAnswer(parseInt(answer), keepScore);
        nextQuestion();
    }
}
        nextQuestion();
})();





















