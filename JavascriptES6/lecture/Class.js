/*Class 를 맹글어 보자*/


// 객체 지향 문법임 -> 왜 쓰냐: 오브젝트를 여러개 만들어 쓰려고 하는 것

class 부모 {  //es6 버전에 생성자Constructor 만들기 상속 가능함
    
    constructor(){  //constructor 만드는 방법
        this.name = 'Kim';
        this.sayHi = function(){
            console.log("안녕하세요");
        }
       // sayHi(){
       //     console.log("헬로");
       // } 여기에 쓰면 부모의 prototype에 생성 됨
    }
}

//Object.getPrototypeOf(자식) => 내장 함수임, 부모의 prototype 알려준다