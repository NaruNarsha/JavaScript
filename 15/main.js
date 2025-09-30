
// 자바스크립트 기초 1. 변수 | primitive 타입과 object의 차이점

// number, string, boolean, null. undefined
let age = 2;
let num = '2';

// object 
let obj = {
    name: 'ellie',
    age: 5,
};

let obj2 = obj;

console.log(obj2.name);


obj.name = 'james';
console.log('-------------------------');
console.log(obj.name);
console.log(obj2.name);