// 1. Use strict
// added in ES 5
// use this for Valina Javascript

'use strict'


//---------------------------------------------------------------------------------

// 2. Variable (변수), rw - 변경될 수 있는 값.. 
// let (added in ES6) 
let globalName = 'global name';
{
    let name = 'naru';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
console.log(name);
console.log(globalName);

// var (don't ever use this!!!)
// var hoisting (move declaration from bottom to top)
// has no block scope
{
    age = 4;
    var age;
}
console.log(age);

//---------------------------------------------------------------------------------

// 3. Contant, r(read only)
// use const whenever possible.
// only use let if variable needs to change.

// Note!!!
// Immutable data types : premitive types, frozen objects (i.e. object.freeze())
//                        데이터 자체를 변경 불가.

// Mutable data types : all objects by default are mutable in JS 
//                        데이터 자체 변경 가능.

// favor immutable data type always for a few reasons : 
// ( 값을 할당후에 변경되지 않는.. )
//      - security (보안상의 이유)
//      - thread safety 
//      - reduce human mistakes

// JavaScript에서는 변수를 선언할 때 2가지가 있다.
// Mutable      :: let 
// Immutable    :: const 
const daysInWeek = 7;
const maxNumber = 5;


//---------------------------------------------------------------------------------

// 4. Variable types
// primitive, single item : num, string, boolean, null, undefiedn, symbol
// object, box container 
// function, first-class function
const count = 17;   // integer
const size = 17.1;  // decimal number
console.log(`value: ${count}, type : ${typeof count}`);
console.log(`value: ${size}, type : ${typeof size}`);


// number - speicla numeric values : infinity, 
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;

console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//---------------------------------------------------------------------------------

// string 
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);

const helloBob = `hi ${brendan}!`;  // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);


//---------------------------------------------------------------------------------

// boolean 
// false: 0, null, undefined, NaN, ''
// true : any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);


//---------------------------------------------------------------------------------

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);


//---------------------------------------------------------------------------------

// symbol, create unique indentifiers fort objects
// 고유한 식별자가 필요할 때 사용
const symbol1 = Symbol('id');
const symbol2 = Symbol('id')
console.log(symbol1 == symbol2);

const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 == gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1.description}`);


//---------------------------------------------------------------------------------

// object, real-life object, data structure
const ellie = {name : 'ellie', age:20};
ellie.name = 'ellie';
ellie.age = 21;


//---------------------------------------------------------------------------------


// 5. Dynamic typing: dynamically typed lanquage
let text = 'hello';
console.log(text.charAt(0)); // h

console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);

//console.log(text.charAt(0));  // 위에서 타입이 변경되었기 때문에 에러.. 
                                // JavaScript는 런타임에서 타입이 정해진다.