var test = function (arr, fn) {
   return console.log( arr.sort((a, b) => a-b))
};

test([{ "x": 0 }, { "x": -1 }, { "x": 1 }]);