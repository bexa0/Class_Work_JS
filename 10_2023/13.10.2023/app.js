import { films } from './data.js';

console.log(films)
for (const i of films){
    console.log(i.name)
}

let a = [1, 2, 3, 4, 5, 6]
for (let i = 0; i < a.length; i++){
    if (a[i] % 2 == 0){
        console.log(a[i])
    }
}

// 1 вариант
let arr = [1, 13, 3, 44, 5]
let maxValue = arr[0]
for (let i = 0; i < arr.length; i++){
    if (maxValue < arr[i])
        maxValue = arr[i]
}

// 2 вариант
arr.sort((x, y) => {x - y})
arr[arr.length - 1]