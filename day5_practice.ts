type Words = {
    [key:string]: string 
}

class Dict {
    private words: Words 

    constructor(        
    ) { this.words = {}
    }
    //단어 추가 
    add(word: Word){
        if(this.words[word.term] === undefined) {
            this.words[word.term] = word.def; 
        }
    }
    //단어 정의 리턴 
    get(term: string){
        return this.words[term];
    }
    //단어 삭제 
    delete(term: string){
       delete this.words[term];
    }
    //단어 업데이트 
    update(word: Word){
        this.words[word.term] = word.def; 
    }
    //dic에 있는 모든 단어 프린트 - 더 생각해보기 
    // showAll() {
    //     for(let[key,value] of Object.entries(this.words)) {
    //         console.log(this.words, this.words.term); 
    //     }
    // }
    //dict에 있는 단어 모두 카운트 
    count(word: Word) {
        const count = Word.length; 
        return count; 
    }

}


class Word{
    constructor(
        public term:string, //용어 
        public def: string  //의미 
    ){}
}

const kimchi = new Word("kimchi", "한국의 음식"); 

const dict = new Dict() 

dict.add(kimchi); 
dict.get("kimchi"); 

