const readline = require('readline');

// all the questions
const questions = [
  "What's your name? Nicknames are also acceptable :) ",
  "What's an activity you like doing? ",
  "What do you listen to while doing that? ",
  "Which meal is your favourite (eg: dinner, brunch, etc.) ",
  "What's your favourite thing to eat for that meal? ",
  "Which sport is your absolute favourite? ",
  "What is your superpower? In a few words, tell us what you are amazing at! "
];

// store all the answers
let answers = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// recursive function
const askQuestions = (questions, questionIndex) => {
  rl.question(questions[questionIndex], (answer) => {
    answers.push(answer);
    console.log(`Your answer for question ${questionIndex}: ${answer}`);
    questionIndex++;
    if (questionIndex > questions.length - 1) {
      rl.close();
      return console.log(`${answers[0]} likes ${answers[1]} while listening to ${answers[2]}. Their favorite meal is ${answers[3]}, especially if it's ${answers[4]}! To burn off some calories, they enjoy ${answers[5]}. If they keep it up, they'll keep getting better at ${answers[6]}!`);
    }

    askQuestions(questions, questionIndex);
  });
};


askQuestions(questions, 0);





