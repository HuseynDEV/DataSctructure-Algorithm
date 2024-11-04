function fibonacci1(number) {
    let ary = [0, 1]
    for (let i = 2; i <= number; i++) {
        ary.push(ary[ary.length - 1] + ary[ary.length - 2])
    }
    return console.log(ary);

}

fibonacci1(5)

function fibonacci2(number) {
    let ary = [0, 1]
    let n1 = 0, n2 = 1, nextTerm;

    for (let i = 0; i <= number; i++) {
        nextTerm = n1 + n2
        n1 = n2
        n2 = nextTerm
        ary.push(nextTerm)
    }
    return console.log(ary);
}

fibonacci2(5)


function fibonacci3(number) {
    let ary = [0, 1]
    let nextTerm;

    for (let i = 0; i <= number; i++) {
        nextTerm = ary[i] + ary[i + 1]
        ary.push(nextTerm)
    }
    return console.log(ary);


}

fibonacci3(3)
