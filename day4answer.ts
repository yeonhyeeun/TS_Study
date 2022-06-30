//1번 : last(arr) 함수   
function last<T>(a: T[]){
    return a[(a.length-1)]
}
// console.log("last 결과")
console.log(last([1,2,3,4]))
// console.log(last(["1","2","hi"]))


//2번 : 배열의 시작에 아이템을 넣고 리턴하는 함수 prepend(arr, item)

// function prepend<T>(a: T[], b:T){
//     b = a[0] 
//     return b
// }

type Prepend = {
    <T>(arr: T[]):T}

const prepend: Prepend = (arr) => arr[0]

const p = prepend([1,2,3,4])
console.log(p)
