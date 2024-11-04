function areAnagrams(str1, str2) {
    let checkFunc = (str) => str.split('').sort().join('')
    return checkFunc(str1) == checkFunc(str2)

}

console.log(areAnagrams('listen', 'silent'))
console.log(areAnagrams('hello', 'world'))