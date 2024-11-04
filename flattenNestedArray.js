// function flattenArray(arr) {
//     let ary = []
//     for (let i = 0; i < arr.length; i++) {
//         if (!arr[i].length) {
//             ary.push(arr[i])
//         }
//         else {
//             for (let j = 0; j < arr[i].length; j++) {
//                 if (!arr[i][j].length) {
//                     ary.push(arr[i][j])
//                 }
//                 else {
//                     for (let k = 0; k < arr[i][j].length; k++){
//                         ary.push(arr[i][j][k])
//                     }
//                 }
//             }
//         }
//     }
//     return console.log(ary)
// }

// flattenArray([1, [2, [3, 4], 5], 6])





//---------------------Way 2----------------
let ary = []

function flattenArray2(arr) {

    arr.map(item => {
        !item.length ? ary.push(item) : flattenArray2(item)
    })
    return ary
}

console.log(
    flattenArray2([1, [2, [3, 4], 5], 6])

);
