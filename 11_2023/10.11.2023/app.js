// const body = document.querySelector('body') // select
// for (let i = 0; i < 10; i++) {
//     const input = document.createElement('input') // create
//     input.placeholder=`input - ${i}`
//     input.type='number'
//     input.setAttribute('itstep', '503') // добавить type который даже не существует
//     body.append(input)
// }
// const body = document.querySelector('body')
// for (let i = 0; i < 5; i++) {
//     const img = document.createElement('img')
//     img.id = `${i}`
//     img.src = './img/unnamed.png'
//     img.width = '200'
//     body.append(img)
    // body.addEventListener('click', function (event){
    //     event.target.src = 'data:image/jpeg;base64,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'
    // })
// }
// body.addEventListener('click', (events) => {
//     if (events.target == events.currentTarget){
//         return;
//     }
//     console.log(events.pageX);
//     console.log(events.pageY);
// })

// const cursor = document.createElement("div")
// cursor.classList.add('cursor')
// body.append(cursor)
// body.addEventListener("mousemove", (event) => {
//     cursor.style = `
//                 top: ${event.pageY}px;
//                 left: ${event.pageX}px;
//                 `
// })


const p = document.querySelector('p')
p.addEventListener('click', (events) =>{
    if (events.target.localName == 'p'){
        p.style = 'color: blue'
    }
})

const header = document.querySelector('h1')
header.addEventListener('click', (events) =>{
    if (events.target.localName == 'h1'){
        header.style = 'color: red'
    }
})