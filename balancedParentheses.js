// ----------------------- Version 1----------------------
// const balancedParentheses = (item) => {
//     let splitedItem = item.split('')
//     for (let i = 0; i < splitedItem.length; i++) {
//         if (splitedItem.length - 1 == i) {
//             return
//         }
//         if ((splitedItem[i] == ")" && splitedItem[i + 1] == "(") || (splitedItem[i] == "(" && splitedItem[i + 1] == ")")) {
//             return true
//         }
//         else {
//             return false
//         }
//     }
// }

// console.log(balancedParentheses("()()"));



// ----------------------- Version 2----------------------
// const balancedParentheses2 = (item) => {

//     const splitItem = item.split('')
//     let ary1 = []
//     let ary2 = []
//     splitItem.map(item => item == ")" ? ary1.push(item) : item == "(" ? ary2.push(item) : null)
//    return ary1.length == ary2.length ? true : false

// }


// console.log(balancedParentheses2("((()))"))


// function isBalanced(str) {
//     let balance = 0;

//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];
//         char === '(' ? balance++ : char === ')' ? balance-- : false
//     }

//     return balance === 0;
// }

// console.log(isBalanced("()()"));  // true
// console.log(isBalanced("(())"));  // true
// console.log(isBalanced("(()"));   // false
// console.log(isBalanced(")("));    // false



// var createCounter = function (init) {
//     let item = init

//     function increment() {
//         return item += 1
//     }
//     function reset() {
//         return init
//     }
//     function decrement() {
//         return init -= 1
//     }

//     return { increment, reset, decrement }

// };

// const counter = createCounter(5)
// console.log(
//     counter.increment()
// );

// console.log(
//     counter.reset()

// );
// console.log(
//     counter.decrement()

// );









var filter = function (arr, fn) {
    const newAry = []
    for (let i = 0; i < arr.length; i++) {
        fn(arr[i], i) && newAry.push(arr[i])
    }
    return newAry

};


filter([0, 10, 20, 30, 5], function greaterThan10(n) { return n > 10 })