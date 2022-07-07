//이전 공부 내용 
//   const kimchi = {
//     맛있어 : true
// }

// let a = 3; 
// let b = "hio"; 

// //call signiture 작성 
// type SuperPrint = {
//  <TypePlaceholder>(arr: TypePlaceholder[]):TypePlaceholder
// //(arr: boolean[]):void
// //(arr: string[]):void
// //(arr:(number|boolean)[]):void
// //이런 문제들을 모두 해소해주는 제네릭 타입! 
// }

// const superPrint: SuperPrint = (arr) => arr[0]
// //  {
// //    arr.forEach(i => console.log(i))
// //  }

// const a = superPrint([1,2,3,4])
// const b = superPrint([true, false, true])
// superPrint(["1","2","3"])
// superPrint([1,2,true, false])



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

console.log(a)

type a = Array<number>

// day 5 
// #4.0

abstract class User {
    constructor(
        //Private, protected, public 
        private firstname:string, 
        private lastname:string, 
        protected nickname:string 
    ){}
    abstract getNickname():void
    getFullname(){
        return `${this.firstname} ${this.lastname}`
    }
}

class Player extends User{
    getNickname() {
        console.log(this.nickname)
    }
}

const nico = new Player("nico", "las", "니꼬");
nico.getNickname()
nico.getFullname()

//07.04 4.2 interfaces
type Food = string; 

type Friends = Array<string> 
type Team = "red" | "blue" | "yellow"
//내가 원하는대로 type 지정 가능, 혹은 특정한 것으로 지정까지 가능 
type Health = 1 |  5 | 10 
type friendship = 1 | 3 | 5 | 7 | 9 | 10 

interface HyeFriends {
    nickname: string, 
    team: Team, 
    health: Health, 
    FriendShip : friendship
}
