function memoize(...args) {
    const obj = new Map()
    const key = JSON.stringify(args)
    if (obj.has(key)) {
        return console.log(obj.get(key));
    }
   return console.log(obj.set(key, 22));
   



}



memoize(1, 2, 3)