const cumulativeSum = (ary) => {
    let count = 0
    for (let i = 0; i < ary.length; i++) {
        count += ary[i]
        ary[i]=count
    }
    return console.log(ary);
}

cumulativeSum([10, 15, 20, 25, 30])

// 10=10
// 10+15=25
// 10+15+20=45
// 10+15+20+25=70
// 10+15+20+25+30


// const cumulativeSum = (ary) => {
//     let count = 0
//     for (let i = 0; i < ary.length; i++) {
//         count += ary[i]
//         ary[i] = count
//     }
//     return console.log(ary);
// }

// cumulativeSum([10, 15, 20, 25, 30])