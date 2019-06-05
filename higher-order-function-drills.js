

'use strict';

function repeat(fn,n){
  for(let i=0; i<n; i++){
    fn();
  }
}

function hello(){
  console.log('Hello world');
}

function goodbye(){
  console.log('Goodbye world');
}

repeat(hello,5);
repeat(goodbye,5);

 //Drill 3
function filter(arr, fn) {
  let newArray = [];
  for (let i= 0; i < arr.length; i++){
    if(fn(arr[i])){      
      newArray.push(arr[i]);      
    }
  }  
  return newArray;
}



// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
  // This is known as a "predicate function" - it's a function that 
  // only returns a boolean
  return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES


function hazardWarningCreator (typeOfWarning){
  let warningCounter=0;
  return function(location){
    warningCounter++;
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
  }

}
const rocksWarning = hazardWarningCreator('Rocks on the Road');
const rainWarning = hazardWarningCreator('Rain on the Road');
const tornadoWarning = hazardWarningCreator('Tornado on the Road');

rocksWarning('Main St and Pacific Ave');
// => DANGER There is a Rocks on the Road hazard at Main St and Pacific Ave
// => The Rocks on the Road hazard has triggered 1 time(s) today!

rocksWarning('Centinela Ave and Olympic Blvd');
// => DANGER There is a Rocks on the Road hazard at Centinela Ave and Olympic Blvd
// => The Rocks on the Road hazard has triggered 2 time(s) today!

// Invoke the other hazard creators you instantiated, too

const movement = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];
let newMovement = movement.filter(steps => steps[0] >= 0 && steps[1] >= 0);
const totalMovement = newMovement.map(steps => steps[0] + steps[1]);
let moveCount = 0;
totalMovement.forEach(function(totalSteps){
  if (totalSteps === 1){
    console.log(`Movement # ${moveCount}: ${totalSteps} step`);
  }
  else {
    console.log(`Movement # ${moveCount}: ${totalSteps} steps`); 
  }
  moveCount++;
})

const testInput = "noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest";
function decode(words){
  const arrWord = words.split(" ");
  let result = "";
  for (let i= 0; i < arrWord.length; i++){
    if (arrWord[i].length === 3){
      arrWord[i] = " ";

    }
    else {
      arrWord[i]= arrWord[i].charAt(arrWord[i].length-1).toUpperCase();           
    }
  }
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  let codeWord = arrWord.reduce(reducer, "");
  return codeWord;
  
}

console.log(decode(testInput));