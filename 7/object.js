// 객체 (Object)
// 자바스크립트의 데이터 유형 중 하나입니다.
// 관련 데이터 및/또는 기능의 모음.
// JavaScript의 거의 모든 객체는 Object의 인스턴스입니다
// 객체 = { 키: 값 }; 

// 1. 객체 리터럴과 생성자 함수
const obj1 = {};            // 'object literal' syntax
const obj2 = new Object();  // 'object constructor' syntax


function print(person){
    console.log(person.name);
    console.log(person.age);
}


const ellie = {name: 'ellie', age:4};
print(ellie);



//--------------------------------------------------------------------------------

// 2. Computed properties (계산된 속성)
console.log('--- 2. Computed properties ---');
console.log(ellie.name);
console.log(ellie['name']);


function printValue(obj, key){
    console.log(obj[key]);
}

printValue(ellie, 'name');
printValue(ellie, 'age');



//--------------------------------------------------------------------------------

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2};
const person2 = { name: 'steve', age: 3};
const person3 = { name: 'dave', age: 4};

// 4. constructor function
function Persion(name, age){
    // this = {};
    this.name = name;
    this.age = age;
    // rturn this;
}

const persion4 = new Persion('ellie', 30);
console.log(persion4)



//--------------------------------------------------------------------------------

// 5. in operator: property existence check (key in obj)
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie);
console.log(ellie.random); // undefined


//--------------------------------------------------------------------------------

// 6. for..in vs for..of
// for (key in obj)
console.clear();

for(key in ellie){
    console.log(key);
}


// for (value of iterable)
const array = [1,2,3,5];
for( value of array){
    console.log(value);
}



//--------------------------------------------------------------------------------
// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])

const user = { name: 'ellie', age: '20'};
const user2 = user; // user2는 user를 가리키는 레퍼런스
console.log(user);

// old way
const user3 = {};
for( key in user){
    user3[key] = user[key]
}

console.clear();
console.log(user3);

const user4 = {};
Object.assign(user4, user);
console.log(user4);



// another example
console.clear();
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);

console.log(mixed.color);
console.log(mixed.size);
