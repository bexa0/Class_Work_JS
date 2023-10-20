const list = [1, 2, 3, 4, 5, 6]
//let NeArr = [1, 2, 3, 4, 5, 6]
//function join(sumbol, arr = []){
//    let str = ''
//    for (let i = 0; i < arr.length; i++){
//        if (i < arr.length - 1){
//            str = str + arr[i] + sumbol
//        }
//        else{
//            str = str + arr[i]
//        }
//    }
//    return str
//}
//console.log(join('-', NeArr))


//function reverse(arr){
//    let newArr = []
//    for (let i = arr.length - 1; i >= 0; i--){
//        newArr.push(arr[i])
//    }
//    return newArr
//}
//console.log(reverse(list))


//function split(str, sumbol = '  '){
//    const arr = []
//    let s = ''
//    for (let i = 0; i < str.length; i++){
//        if (str[i] === sumbol){
//            arr.push(s)
//            s = ''
//        }
//        s += str[i]
//    }
//     return arr
//}
//console.log(split('How are you ?'))


//function splice(start, end, arr = []) {
//    const newArr = []
//    if(end<0){
//        end = arr.length+end
//    }
//    for(let i =  start; i < end; i++){
//        newArr.push(arr[i])
//    }
//    return newArr
//}
//console.log(splice(1, -2, list))


//const List = [1, 2, 3, 4, 5, 6, 7]
//function splice(start, deleteCount, arr = [], ...args){
//    const newArr = []
//    if (deleteCount == 0){
//        for (let i = 0; i < arr.length; i++){
//            if (i == start){
//                newArr.push(arr[i])
//                newArr.push(...args)
//            }
//        }
//    }
//    else{
//        newArr.push(...args)
//    }
//    return newArr
//}
//console.log(splice(2, 1, List, 'a', 'a', 'a'))