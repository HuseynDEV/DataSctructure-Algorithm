function capitalizeWords(str) {
    return  str.split(' ').map(item => item.charAt(0).toUpperCase() + item.slice(1)).join(' ')
}

console.log(capitalizeWords('hello world from javascript'));