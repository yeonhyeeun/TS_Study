type PrintArr = {
    <TypePlaceholder>(arr: TypePlaceholder[]):TypePlaceholder
  }

const last: PrintArr = (arr) => arr[arr.length-1]

const answer = last([1,2,3,4])
console.log(answer) 