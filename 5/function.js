//---------------------------------------------------------------------------------------
// 1. Function
// - 프로그램을 구성하는 기본적인 빌딩 블록
// - subprogram 이라고도 불리며 여러번 재사용이 가능
// - 하나의 작업을 수행하기 위해 독립적으로 설계된 코드의 집합

// function is object in JS
// function = first-class function

function printHello() {
    console.log('Hello');
}

printHello();

function log(message){
    console.log(message);
}


log('function hello');
log(1234);


//---------------------------------------------------------------------------------------

// 2. Parameters
// - primitive parameters: passed by value
// - object parameters: passed by reference
function changeName(obj){
    obj.name = 'coder';
}

const ellie = { name : 'ellie'};
changeName(ellie);
console.log(ellie);



//---------------------------------------------------------------------------------------

// 3. Default parameters (added in ES6)
function shoMessage(message, from = 'unknown'){

    console.log(`${message} by ${from}`);
}

shoMessage('HI!');



//---------------------------------------------------------------------------------------

// 4. Rest parameters (added in ES6)
//    ... Rest Parameters
//    ... 배열 형태로 전달됨
function printAll(...args){
    // for(let i = 0; i < args.length; i++){
    //     console.log(args[i]);
    // }

    for(const arg of args){
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}

printAll('dream', 'coding', 'ellie');



//---------------------------------------------------------------------------------------

// 5. Local scope
// - 밖에서는 안이 보이지 않고, 안에서만 밖을 볼 수 있음

let globalMessage = 'global'; // global variable
function printMessage()
{
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage);
}

printMessage();


//---------------------------------------------------------------------------------------

// 6. Return a value
function sum(a , b){
    return a + b;
}

const result = sum(1,2);
console.log(`sum: ${sum(1,2)}`);




//---------------------------------------------------------------------------------------

// 7. Early return, early exit
// - bad
function upgradeUser(user)
{
    if(user.point > 10)
    {
        // long upgrade logic...
    }
}

// - good
function upgradeUser(user)
{
    if(user.point <= 10)
    {
        return;
    }
    // long upgrade logic...
}


//---------------------------------------------------------------------------------------
// 8. First-class function
// - functions are treated like any other variable
// - can be assigned as a value to variable
// - can be passed as an argument to other functions
// - can be returned by another function


// 1 Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.
// 함수 선언은 정의된 것보다 더 일찍 호출할 수 있습니다. (호이스트)
// 함수 표현식은 실행이 그것에 도달하면 생성됩니다.
const print = function() { // anonymous function  // function()의 이름이 없이 print에 할당됨
    console.log('print');
};

// or 
const print2 = function print2(){ // named function 
    console.log('print');
};


print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,3));




//---------------------------------------------------------------------------------------

// 2. Callback function using function expression
//      함수 표현을 사용한 콜백 함수

function randomQuiz(answer, printYes, printNo)
{
    if(answer === 'love you')
    {
        printYes();
    }
    else
    {
        printNo();
    }
}

// anonymous function
const printYes = function() {
    console.log('yes!');
};

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
    console.log('no!');
}


randomQuiz('pri', printYes, printNo)
randomQuiz('love you', printYes, printNo)




//---------------------------------------------------------------------------------------
// Arrow function
// - always anonymous
const simplePrint = function(){
    console.log('simplePrint!');
}

const simplePrint2 = () => console.log('simplePrint!');
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
    return a * b;
}


//---------------------------------------------------------------------------------------
// IIFE: Immediately Invoked Function Expression
(function hello() {
    console.log('IIFE');
})();

//---------------------------------------------------------------------------------------


function calculate(command, a, b)
{
    switch(command)
    {
        case 'add':
            return a + b;
        case 'substract':
            return a - b;
        case 'divide':
            return a / b;
        case 'multiply':
            return a * b;
        case 'remainder':
            return a % b;
        default:
            throw Error('unknown command');
    }   
}

calculate('add' , 1, 4);
calculate('substract' , 1, 4);  