// new Promise((resolve, rejected) => {
//     resolve('hello')
//     rejected("bad")
// })
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
//     .finally(res=>console.log('hello'))

// pending
// resolved
// rejected
// finally


// const promise = new Promise(callback)
// promise
//     .then(() => console.log('resolved'))
//     .catch(() => console.log('rejected'))
//     .finally(() => console.log("Successfully Completed"))



// function callback(resolve, rejected) {

//     try {
//         resolve()
//     }
//     catch (err) {
//         rejected("Error occurred")
//     }

// }


// async function sleep(millis) {

//     function callback(resolve, reject) {
//         setTimeout(resolve, millis)
//     }

//     return new Promise(callback)

// }


async function hello(millis) {
    new Promise((resolve, rejected) => {
        return setTimeout(resolve, millis)
    })
}


