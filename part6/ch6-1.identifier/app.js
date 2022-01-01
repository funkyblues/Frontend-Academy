// 식별자(identifier)는 변수명이나 함수명을 말하는 거 같다.
// 숫자로 시작 안되고, 띄어쓰기 안된다.
// 상수는 이렇게 대문자로 작성을 한다.
const MY_AGE = 25; 
let age = 10;

// CamelCase! 많이 씀
function setAge() {

}

const o = {
    age: 10,
    // 객체 내의 속성을 작성할 때도 동일한 규칙.
    // age가 식별자가 된다.
    ["myName"] : "김",
    ["123 my Name"] : "우"
}
o.age; // 10
o.myName; // 김 -> 데이터가 식별자화 될 수 있다.
o["123 my Name"]; // 우 -> 식별자 명명규칙을 따르지 않고도 사용할 수 있다!