// Define arrays for the excuse generator
let who = ['The dog', 'My grandma', 'His turtle', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = [
  'before the class',
  'right on time',
  'when I finished',
  'during my lunch',
  'while I was praying',
];

// Get the excuse using getelementById
const excuseElement = document.getElementById('excuse');

// Generate the ramdon excuse
const randomWho = who[Math.floor(Math.random() * who.length)];
const randomAction = action[Math.floor(Math.random() * action.length)];
const randomWhat = what[Math.floor(Math.random() * what.length)];
const randomWhen = when[Math.floor(Math.random() * when.length)];

// Get the excuse
const excuse = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}!`;

// Set the innerText
excuseElement.innerText = excuse;
