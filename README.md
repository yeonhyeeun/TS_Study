# TS_Study
TypeScript 공부 기록   

> #4.1 recap  
TS는 추상형을 가능하게 한다.  
기본적으로 모든 것은 public이다.  
추상 클래스, 추상 메소드, protected, public, private 같은 것들은 TS에서만 제공! JS에서는 ㄴㄴ  

```
 type Words = {
     [key:string]: string 
 }

//  let dict :Words = {
//      "potato": "food", 
//      "tomato": "food", 
//      "bibimbab": "food", 

//      "ryeni": "person", 
//      "hyerong":"person", 

//      "coding": "study", 
//      "TS":"study"


//  }

  class Dict {
    private words: Words 
    constructor() {
        this.words = {}
    }    

    add(word:Word) {
        if(this.words[word.term] === undefined) {
            this.words[word.term] = word.def 
        }
    }

  }

class Word{
    constructor(
        public term: string, 
        public def : string 
    ) {}
}

const kimchi = new Word("kimchi", "한국의 음식"); 

const dict = new Dict(); 

dict.add(kimchi); 
```
-> TS에서는 Class(ex. Word)를 type처럼 사용할 수 있다! ex. word: Word (위 코드에서)  

