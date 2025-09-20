// JSON
// JavaScript Object Notation
// A syntax for storing and exchanging data
// JSON is text, written with JavaScript object notation

// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);


const rabbit = {
    name : 'tori',
    color : 'white',
    size : null,
    birthDate : new Date(),
    jump : () => {
        console.log(`${this.name} can jump!`);
    }
}


json = JSON.stringify(rabbit);
console.log(json);

// jump 함수는 json에 포함되지 않음
// object에 있는 데이터 중에서 함수는 json에 포함되지 않음

// json은 object가 아님. string임
// 따라서 json에 있는 데이터를 object로 다시 바꿔야 함
json = JSON.stringify(rabbit, ["name"]);
console.log(json);


json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return value;
});
console.log(json);


// 2. JSON to Object
// parse(json)

console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj);

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate);

