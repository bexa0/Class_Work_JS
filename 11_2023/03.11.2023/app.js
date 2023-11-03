//class Car{
//    constructor(color){
//    this.color = color
//}
//    color = 'red'
//    move(){
//        console.log('')
//    }
//}
//const car1 = new Car('red')
//const car2 = new Car('blue')
//car2.move()
//console.log(car2.color)


// const a = document.querySelector('b')
// console.log(a);
// a.addEventListener('click', function (params){
//     console.log(click);
// })


// const inf = document.querySelector('button')
// inf.addEventListener('click', function (params){
//     const a = document.querySelector('input').value
//     console.log(a)
//     document.body.innerHTML += a
// })


// const checkbox = document.querySelector('input')
// checkbox.addEventListener('click', function (event) {
//     console.log(event.target)
//     if (event.target.checked)
//         document.querySelector('p').style = 'display:none;'
//     else
//         document.querySelector('p').style = 'display:block;'
// })


// const color = document.querySelector("input[type='color'")
// color.addEventListener('input', function (event) {
//     document.body.style = "background-color:" + color.value + ';'
// })


const x = document.querySelector('.x')
const y = document.querySelector('.y')
const btn = document.querySelector('button')
btn.addEventListener('click', function (event) {
    const x = document.querySelector('.x').value
    const y = document.querySelector('.y').value
    let num1 = Number(x)
    let num2 = Number(y)
    sum = num1 + num2
    console.log(sum)
})