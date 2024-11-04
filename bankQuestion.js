function createObj(text) {
    let splitVersion = text.split('')
    const obj = {}
    for (item of splitVersion) {
        obj[item] = obj[item] ? obj[item] + 1 : 1
    }
    return obj
}


console.log(createObj('misisipi'))




function createObj2(text) {

    return text.split('').reduce((total, item) => {
        total[item] = total[item] ? total[item] + 1 : 1
        return total
    }, {})
}


console.log(createObj2('misisipi'))