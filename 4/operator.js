// 1. String concatenation
console.log('my'+ ' cat' );
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

//-------------------------------------------------------------------------

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation

//-------------------------------------------------------------------------

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`preIncrement: ${postIncrement}, counter: ${counter}`);

//-------------------------------------------------------------------------

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y 
x -= y;
x *= y;
x /= y;

//-------------------------------------------------------------------------

// 5. Comparison operators
console.log(10 < 6);    // less than
console.log(10 <= 6);   // less than or equal
console.log(10 > 6);    // greater then
console.log(10 >= 6);   // greater than or equal


//-------------------------------------------------------------------------

// 6. Logical operators : || (or), && (end), ! (not)
const Value1 = false;
const Value2 = 4 < 2;

// || (or)
console.log(`or: ${Value1 || Value2 || check()}`);

function check()
{
    for(let i = 0; i < 10; i++)
    {
        // wasting time
        console.log('.........')
    }

    return true;
}


// && (and), finds the first falsy value
console.log(`and: ${Value1 && Value2 && check()}`);

// often used to compress long if-statement
// nullableObject && nullableObject.something
// if(nullableObject != null)
// {
//     nullableObject.something;
// }



// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
// 타입이 다를 경우 
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);


// object equality by reference
const ellie1 = {name: 'ellie'};
const ellie2 = {name: 'ellie'};
const ellie3 = ellie1;

console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);



//-------------------------------------------------------------------------