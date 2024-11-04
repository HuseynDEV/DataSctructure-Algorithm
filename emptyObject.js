// var isEmpty = function (obj) {

//     let ary = []
//     for (let item in obj) {
//         ary.push(item)
//     }
//     !ary.length ? false : ftrue

// };


// isEmpty({ "x": 5, "y": 42 })
// isEmpty({})
// isEmpty([null, false, 0])




function isEmpty(obj) {
    for (let item in obj) return false
    return true
}
// isEmpty({ "x": 5, "y": 42 })
isEmpty({})
