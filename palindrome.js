function palindromeChecker(text) {
    let reverseVersion = text.split('').reverse().join('')
    return reverseVersion == text ? true : false

}


console.log(palindromeChecker('racecar'))