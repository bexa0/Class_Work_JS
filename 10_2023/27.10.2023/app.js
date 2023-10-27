//let list = [1, 2, 3, 4, 5, 6]
//function chet(arr){
//    for(let i = 0; i < arr.length; i++){
//        if(arr[i] % 2 == 0){
//        console.log(arr[i])
//        }
//        else{
//            console.log('False')
//        }
//    }
//}
//let sum = list.reduce((previousValue, currentValue) => {
//    return previousValue + currentValue
//})
//console.log(sum)
//chet(list)
//
//
//function max(arr) {
//    let _maxEl = arr[0]
//    for (let i = 1; i < arr.length; i++){
//        if (_maxEl < arr[i]){
//            _maxEl = arr[i]
//        }
//    }
//    return _maxEl
//}


//function max(arr) {
//    let _maxEl = arr[0]
//    for (let i = 1; i < arr.length; i++){
//        if (_maxEl < arr[i]){
//            _maxEl = arr[i]
//        }
//        else if (_maxEl > arr[i]){
//            _maxEl = arr[i]
//        }
//    }
//    return _maxEl
//}


arr = [1, 2, 3, 4, 5, 6]
const arr2=[]
const index=2
const str="It step"
for(let i=0;i<arr.length;i++){
    arr2.push(arr[i])
    if(i==index)
        arr2.push(str)
}
console.log(arr2)
//console.log(arr)
//user = prompt('Введите куда добавить ')
//user_ans = prompt('Введите что добавить')
//
//empty_arr = []
//
////empty_arr.push(arr[0])
////arr.push(user_ans)
//
//arr[user] = user_ans
//
//
//console.log(arr)

//arr.splice(user, 0, user_ans)
//console.log(arr)