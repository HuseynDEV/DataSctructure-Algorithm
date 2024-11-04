// var chunk = function(arr, size) {
//     let count = 0;
//     let newAry = [];
//     let loop = Math.ceil(arr.length / size); 

//     for (let i = 0; i < loop; i++) {
//         let ary = [];
//         for (let j = 0; j < size; j++) {
//             if (arr[count] !== undefined) { 
//                 ary.push(arr[count]);
//             }
//             count += 1;
//         }
//         newAry.push(ary);
//     }

//     return newAry;
// };

// console.log(chunk([1, 2, 3, 4, 5], 5));




var chunk = function (arr, size) {
    const chunkedArray = [];
    for (let i = 0; i < arr.length; i += size) {
        chunkedArray.push(arr.slice(i, i + size))
    }
    return chunkedArray
};  

console.log(chunk([1, 2, 3, 4, 5], 2));