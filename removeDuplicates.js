

// --------------------- WAY 1 ---------------
function removeDuplicates1(arr) {
    return [...new Set(arr)];
}
removeDuplicates1([1, 1, 3, 4, 5, 5])



// --------------------- WAY 2 ---------------
function removeDuplicates2(arr) {
    let ary = []
    for (let i = 0; i < arr.length; i++) {
        if (!ary.includes(arr[i])) {
            ary.push(arr[i])
        }
    }
    return console.log(ary);
}
removeDuplicates2([1, 1, 3, 4, 5, 5])