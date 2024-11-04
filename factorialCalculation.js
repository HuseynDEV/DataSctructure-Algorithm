"use strict"

// -------------------- WAY 1 -----------------

// function factorialCalculation(number) {

//     let ary = Array.from({ length: 5 }, (v, i) => i + 1)

//     return ary.reduce((total, item) => {
//         return total * item
//     }, 1)

// }
// console.log(factorialCalculation(5));




// -------------------- WAY 2 -----------------

// function factorialCalculation2(number) {
//     if (number == 0 || number == 1) return 1
//     let total = 1
//     for (let i = 1; i <= number; i++) {
//         total = total * i
//     }
//     return total

// }
// console.log(factorialCalculation2(5))




// -------------------- WAY 3 -----------------

function factorialCalculation3(number) {
    if (number === 0 || number === 1) return 1;
    return number * factorialCalculation3(number - 1)

}


console.log(factorialCalculation3(5))



// function countdown(n) {
//     if (n === 0) {
//         console.log("Done!");
//         return;
//     }
//     console.log(n);
//     countdown(n - 1); // Call the function again with a smaller number
// }

// countdown(5);

