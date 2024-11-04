// var reduce = function (nums, fn, init) {
//     let counter = init
//     for (let i = 0; i < nums.length; i++) {
//         counter = fn(counter, nums[i])

//     }
//     return counter
// };

// reduce([1, 2, 3, 4], function sum(accum, curr) { return accum + curr; }, 0)
// reduce([1, 2, 3, 4], function sum(accum, curr) { return 0; }, 25)
// reduce([1, 2, 3, 4], function sum(accum, curr) { return accum + curr * curr; }, 100)










async function sleep(millis) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(millis); // Resolve with the millis value after the timeout
        }, millis);
    });
}

sleep(100).then((millis) => {
    console.log(millis); // Logs the millis value after 100 ms
});