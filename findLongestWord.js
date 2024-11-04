function longestWord(sentence) {

    let longest = ''
    let splitStr = sentence.split(' ')
    // splitStr.map(item => {
    //     if (item.length >= count) {
    //         count = item.length
    //         longest = item
    //     }
    // })

    for (word of splitStr) {
        if (word.length > longest.length) {
            longest = word
        }
    }

    return longest


}



console.log(longestWord('The quick brown fox jumps over the lazy dog'));
