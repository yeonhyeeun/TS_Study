//제네릭 타입 공부 
//다형성과 함께 

//마치 벡터와 같은 
type SuperPrint = {
    <TypePlaceholder>(arr: TypePlaceholder[]): TypePlaceholder
}
//<T>로 주로 줄여씀 -> type의 약자 

const superPrint: SuperPrint = (arr) => arr[0] 

const a = superPrint([1,2,3,4])
const b = superPrint([true, false, false])
const c = superPrint(["a", "b", "c"])
const d = superPrint(["a", "b", 1, 2, true])
