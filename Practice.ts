//제네릭 타입 공부 
//다형성과 함께 

type SuperPrint = {
    <TypePlaceholder>(arr: TypePlaceholder[]): TypePlaceholder
}

const superPrint: SuperPrint = (arr) => arr[0] 

const a = superPrint([1,2,3,4])
const b = superPrint([true, false, false])
const c = 