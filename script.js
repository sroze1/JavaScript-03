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

const t1 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmplitude = function(temps) {

// let min = temps[0];
// let max = temps[0];
//     for(let i = 0; i < temps.length; i++) {
//         const curTemp = temps[i];
//         if(typeof curTemp !== 'number') continue;

//         if(curTemp > max) max = curTemp;
//         if(curTemp < min) min = curTemp;
//     }

//     console.log(max, min);
//     return max - min;
// };
// const amplitude = calcTempAmplitude(t1);
// console.log(amplitude);

// // 1 Understand the problem
//     // What is temp amplitutde Answer: difference
//     // between highest and lowest temp.
// // - Now to complete max and min temperatures
// // - What's a sensor error? And what to do?

// // 2 Breaking up the problem
// // - How to ignore erros?
// // - Find max value in temp array
// // - Find min value in temp array
// // Subtract min from max (amplittude) and return it

// const t2 = [3, -5, -9, 2, 'error', 10, 21, 12, 17, 14, 4, 8];

// const calcTempAmplitudeBug = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let min = temps[0];
//   let max = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }

//   console.log(max, min);
//   return max - min;
// };

// const t3 = t1.concat(t2);

// const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// console.log(amplitudeBug);

// const measureKelvin = function() {
//     const measurement = {
//         type: 'temp',
//         unit: 'celcius',
//         value: 10
//     }

//     console.table(measurement);
//     // console.warn(measurement.value);

//     const kelvin = measurement.value + 273;
//     return kelvin;
// }

// console.log(measureKelvin());

// Become a blockchain developer

// Finish javascript -- complete 5 hours per day
// Get an Uber taxi license this week. Complete this graft now after
// Get an Uber taxi license this week. Complete this graft noW



// Given an array of forecasted maximum temperatures, the thermometer displays
// a string with these temps
// TEST DATA : 1 [ 17, 21, 23 ]
// TEST DATA : 2 [ 12, 5, -5, 0, 4]

// EG

// Create a function 'printForecast'
// which takes array 'arr' and logs a string like the above
// to the console


const test1 = [17, 21, 23];
const test2 = [12, 5, -5, 0, 4];


const printForecast = function (arr) { 
    

    for(let i = 0; i < arr.length; i++) { 
        console.log( `${arr[i]} degrees in ${i+1} days `);
    }

    console.log();
}

// days increase incrementally in the console
// the 

printForecast(test1.concat(test2));