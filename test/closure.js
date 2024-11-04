



// // let firstFunction = (func) => {
// //     return function (...args) {
// //         return func(...args)
// //     }
// // }


// // let testFunc = firstFunction((a, b) => a + b)
// // console.log(testFunc(1, 2));




// // var createCounter = function (n) {

// //     return function () {
// //         return n++
// //     }
// // }




// var createCounter = function (init) {
//     let count = init
//     function increment() {
//         return count++
//     }
//     function reset() {
//         return count = init
//     }
//     function decrement() {
//         return count--
//     }
//     return { increment, decrement, reset }
// };


// const counter = createCounter(5)
// counter.increment(); // 6
// counter.reset(); // 5
// counter.decrement(); // 4



// function checkValue(value) {
//     let splitValue = value.split('')
//     let round = 0, square = 0, curly = 0;
//     splitValue.map(char => {
//         if (char === "(") round++;
//         if (char === ")") round--;
//         if (char === "[") square++;
//         if (char === "]") square--;
//         if (char === "{") curly++;
//         if (char === "}") curly--;
//     })
//     return (round === 0 && square === 0 && curly === 0) ? true : false;
// }

// console.log(checkValue('([))]'));




// function checkValue(value) {
//     let splitValue = value.split('')
//     let ary = []
//     splitValue.map(item => {
//         if (item == ")" || item == "}" || item == "]") {
//             ary.push(item)
//         }
//         else if(item == ")" || item == "]" || item == "}") {
//             (char == ")" || char == "]" || char == "}")
//             let popedAry = ary.pop()
//             if ((item === ")" && !popedAry == "(") ||
//                 (item === "}" && !popedAry == "{") ||
//                 (item === "]" && !popedAry == "[")
//             ) {
//                 return false
//             }
//         }
//     })

//     return ary.length == 0

// }


// console.log(checkValue('()[]{}'));



function checkValue(value) {
    let stack = [];
    let isValid = true

    for (let i = 0; i < value.length; i++) {
        let char = value[i];

        if (char == "(" || char == "[" || char == "{") {
            stack.push(char);
        }
        else if (char == ")" || char == "]" || char == "}") {
            let deleted = stack.pop()
            // if (deleted == "(" && char !== ")")

        }
    }

    return isValid && stack.length === 0;
}

// console.log(checkValue("((}}[]"));  // false (wrong order)
console.log(checkValue("()[]{}"));  // true (correct order)




// function checkValue(value) {
//     let stack = []
//     let isValid = true
//     value.split('').map(char => {
//         if (char === "(" || char === "{" || char === "[") {
//             stack.push(char)
//         }
//         else if (char === ")" || char === "]" || char === "}") {
//             let lastChar = stack.pop()
//             if ((char === ")" && lastChar !== '(') ||
//                 (char === "}" && lastChar !== '{') ||
//                 (char === "]" && lastChar !== '[')) {
//                 return isValid = false
//             }
//         }
//     })
//     return isValid
// }
// console.log(checkValue('([)]'));
// console.log(checkValue('([]{})'));
// console.log(checkValue('((}[)]')); 