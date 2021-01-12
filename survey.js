const readline = require('readline');

const questions = [
  "What's your name? Nicknames are also acceptable :) ",
  "What's an activity you like doing? ",
  "What do you listen to while doing that? ",
  "Which meal is your favourite (eg: dinner, brunch, etc.) ",
  "What's your favourite thing to eat for that meal? ",
  "Which sport is your absolute favourite? ",
  "What is your superpower? In a few words, tell us what you are amazing at! "
];

let answers = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// recursive function
const askQuestion = (questions, questionIndex) => {
  rl.question(questions[questionIndex], (answer) => {
    answers.push(answer);
    
    questionIndex++;
    if (questionIndex === questions.length) {
      rl.close();
      console.log(answers);
    }
    askQuestion(questions, questionIndex - 1);
  });
};


askQuestion(questions, 0);



// rl.question(question, (answer) => {
//   answers.push(answer);
//   rl.close();
// });



// rl.question('Q1 ', (answer) => {
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.question('Q2 ', (answer) => {
//     console.log(`Thank you for your valuable feedback: ${answer}`);
//     rl.close();
//   });

// });





