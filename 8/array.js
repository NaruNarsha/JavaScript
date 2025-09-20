'use strict';


// Array 

// 1. Declaration
const arr1 = new Array();
const arr2 = [1,2];

// 2. Index position
const fruits = ['apple','banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length - 1]);

// 3. Looping over an array
// print all fruits
console.clear();

// a. for
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// b. for..of
for(let fruit of fruits){
    console.log(fruit);
}

// c. forEach
fruits.forEach((fruit) => console.log(fruit)); 



// 4. Addition, deletion, copy
// push: add an item to the end :: 배열의 맨 뒤에 아이템 추가
console.log('--- push & pop ---');
fruits.push('peach','mango');
console.log(fruits);

// pop: remove an item from the end :: 배열의 맨 뒤에 아이템 제거
fruits.pop();
console.log(fruits);


// unshift : add an item to the beginning :: 배열의 맨 앞에 아이템 추가
fruits.unshift('lemon','kiwi');
console.log(fruits);

// shift : remove an item from the beginning :: 배열의 맨 앞에 아이템 제거
fruits.shift();
console.log(fruits);


// note!! shift, unshift are slower than pop, push
// pop, push are faster than shift, unshift
// 배열의 맨 앞에 아이템을 추가하거나 제거하는 것은 느리다. 
// 배열의 맨 뒤에 아이템을 추가하거나 제거하는 것이 더 빠르다.  


// splice : remove an item by index position :: 특정 인덱스 위치에 아이템 제거
fruits.push('peach2','mango2','banana2');
console.log(fruits);

fruits.splice(1,1); // 1번째 인덱스부터 1개의 아이템 제거
console.log(fruits);

fruits.splice(1,1, 'apple2','apple3'); // 1번째 인덱스부터 1개의 아이템 제거하고, 그 자리에 'apple2', 'apple3' 추가
console.log(fruits);


// combine two arrays :: 두 배열 합치기
const fruits2 = "orange,watermelon";
const newFruits = fruits.concat(fruits2);
console.log(newFruits);



//-----------------------------------------------------------

// 5. Searching
// indexOf : 배열에서 특정 요소의 첫 번째 인덱스를 반환하며,
//           요소가 배열에 없으면 -1을 반환합니다.
console.clear();
console.log(fruits);
console.log(fruits.indexOf('peach')); 

// includes :: 배열에 특정 요소가 포함되어 있는지 여부를 결정하며, 
//             해당 요소에 따라 참 또는 거짓을 반환합니다.
console.log(fruits.includes('peach')); // true


// lastIndexOf : 배열에서 특정 요소의 마지막 인덱스를 반환하며,
//               요소가 배열에 없으면 -1을 반환합니다.
console.clear();
fruits.push('kiwi');
console.log(fruits);
console.log(fruits.indexOf('kiwi')); // 첫 번째 kiwi의 인덱스
console.log(fruits.lastIndexOf('kiwi'));