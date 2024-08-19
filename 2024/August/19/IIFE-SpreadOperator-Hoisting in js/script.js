async function waitingBaby(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("hey baby how are you?")

        }, time * 1000);
    })
}

// async function main() {
//     console.log("Welcome");
//     let message = await waitingBaby(3)
//     console.log(message);
//     console.log("Bye Bye");
// }
// main()

// IIFE(Immediately Invoke Function Expression)
(async function main() {
    console.log("Welcome");
    let message = await waitingBaby(3)
    console.log(message);
    console.log("Bye Bye");
})()

// Destructuring.......
// Destructuring List
let [x, y, ...rest] = [1, 2, 3, 4, 56, 7, 8, 9, 0, 10]
console.log(x, y, rest);
// Destructuring JSON:
let json = {
    a: 1,
    b: 2
}

let {x1,y1}=json
console.log(x,y);

// Spread Operator

let arr=[1,2,3,4,5,6,7,8]
let obj={...arr} // Spreading array arr and mapping indices to elements to creat a new JSON obj
console.log(obj);

// Hoisting Concept:
// Variables and functions decarled through var is hoisted but those made with let and const are not hoisted......!