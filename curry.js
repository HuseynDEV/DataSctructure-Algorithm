
// function currySum(z) {
//     return function (x) {
//         return function (y) {
//             return z + x + y
//         }
//     }

// }


// console.log(
// currySum(3)(2)(2)

// );










// function curry(fn) {
//     return function (first) {
//         return function (second) {
//             return function (thirt) {
//                 return fn(first, second, thirt)
//             }
//         }
//     }
// }

// const addItem = (a, b, c) => {
//     return a + b + c
// }

// const getData = curry(addItem)
// getData(1)(2)(3)










// function curry(fn) {
//     return function curried(...args) {
//         if (args.length >= fn.length) {
//             return fn(...args);
//         }
//         return function (...nextArgs) {
//             return curried(...args, ...nextArgs);
//         };
//     };
// }
// function add(a, b, c) {
//     return a + b + c;
// }

// const curriedAdd = curry(add);

// console.log(curriedAdd(1)(2)(3)); // Output: 6
// console.log(curriedAdd(1, 2)(3)); // Output: 6
// console.log(curriedAdd(1)(2, 3)); // Output: 6













// function sum(first){
//     return function(second){
//         return first+second
//     }
// }




// console.log(sum(2)(3))



// function outer(name){
//     return function(day){
// return console.log(`Hello ${name} today is ${day}`);

//     }
// }

// // let firstFunc=outer('Huseyn')

// outer('Huseyn')('1')
// outer('Huseyn')('2')
// outer('Huseyn')('3')










var curry = function (fn) {
    return function curried(...args) {
        // if (args.length === fn.length) {
        //     return fn(...args);
        // } else {
        //     return function (...newArgs) {
        //         console.log(newArgs, 'test');
        //         return curried(...args, ...newArgs);
        //     };
        // }

        if (args.length === fn.length) {
           return fn(...args)
        }
        else {
            return function (...newArgs) {
                return curried(...args, ...newArgs);
            };
        }
    };
};

const sumThree = (a, b, c) => a + b + c;
const curriedSum = curry(sumThree);

console.log(curriedSum(1)(2)(3)); // Output: 6
console.log(curriedSum(1, 2)(3)); // Output: 6
console.log(curriedSum(1)(2, 3)); // Output: 6
