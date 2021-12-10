// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = 23;

// const calcAge = birthYear => 2037 - birthYear;

// console.log(calcAge);

// console.log("tatti yaonda");






// In the beginning before we start the array the max element will
// Be the first element of the array. As temps[i] (i is 30)
// max = 3,
// If 3 is greater than 3?
// Yes move onto 7
// Is 4? No stay at 7

// Math.max();
// Math.min();



const t1 = [3, -2, -6, -1, 'error', 
9, 13, 17, 15, 14, 9, 5];




const calcTempAmplitude = function(temps) {

let min = temps[0];
let max = temps[0];
    for(let i = 0; i < temps.length; i++) { 
        const curTemp = temps[i];
        if(typeof curTemp !== 'number') continue;

        if(curTemp > max) max = curTemp;
        if(curTemp < min) min = curTemp;
    } 

    console.log(max, min);
    return max - min;
};
const amplitude = calcTempAmplitude(t1);
console.log(amplitude);



// 1 Understand the problem
    // What is temp amplitutde Answer: difference
    // between highest and lowest temp.
// - Now to complete max and min temperatures
// - What's a sensor error? And what to do?

// 2 Breaking up the problem
// - How to ignore erros?
// - Find max value in temp array
// - Find min value in temp array
// Subtract min from max (amplittude) and return it

const t2 = 
[3, -5, -9, 2, 'error', 10, 21, 12, 17, 14, 4, 8];


const calcTempAmplitude2 = function (temps) {
  let min = temps[0];
  let max = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  console.log(max, min);
  return max - min;
};

const t3 = t1.concat(t2);

const amplitude2 = calcTempAmplitude(t3);
console.log(amplitude2);







// Become a blockchain developer

// Finish javascript -- complete 5 hours per day
// Get an Uber taxi license this week. Complete this graft now after
// Get an Uber taxi license this week. Complete this graft now 