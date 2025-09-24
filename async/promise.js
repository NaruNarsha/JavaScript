'use strict';

// Promise is a JavaScript object for asynchronous operation.
// 비동기 수행을 위해 자바 스크립트가 제공하는 오브젝트
// 콜백함수 대신에 유용하게 쓸 수 있다.

// state: pending -> fulfilled or rejected
// pending :: promise가 만들어져 오퍼레이터가 수행 중일 때
// fulfilled :: 오퍼레이터가 정상적으로 수행이 끝났을 때
// rejected :: 오퍼레이터가 수행 중에 에러가 났을 때 ( 파일을 찾을 수 없거나 네트워크에 문제가 생길경우)


// 1. State :: 상태에 대한 이해
// pending -> fulfilled or rejected
// 대기 -> 이행 or 거부

// 2. Producer vs Consumer :: 생산자 vs 소비자 2가지의 차이점의 이해
//      1) Producer :: 정보를 제공
//      2) Consumer :: 정보를 소비
// when new Promise is created, the executor runs automatically.

//----------------------------------------------------------------

// 1. Producer
// When new Promise is created, the executor runs automatically.
// 새로운 promise가 만들어질 때, executor가 자동적으로 실행된다.
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files)
    console.log('doing something...');

    setTimeout(() => {
        resolve('ellie');
        //reject(new Error('no network'));
    }, 2000);
});



//----------------------------------------------------------------
// 2. Consumer: then, catch, finally
// then :: promise가 정상적으로 수행이 되었을 때
// catch :: promise가 에러가 났을 때
// finally :: 성공이든 실패든 상관없이 무조건 실행
promise
.then((value) => {
    console.log(value);
})
.catch(error => {
    console.log(error);
})
.finally(() => {
    console.log('finally');
})



//----------------------------------------------------------------
// 3. Promise chaining
// Promise 연결하기
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
    }, 1000);
});

fetchNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
    return new Promise((resole, reject) => {
        setTimeout(() => {
            resole(num - 1)
        }, 1000);
    })
})
.then(num => console.log(num));



//----------------------------------------------------------------
// 4. Error Handling
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('hen'), 1000);
    });

const getEgg = hen =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${hen} => egg`), 1000);
    });

const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => fried egg`), 1000);
    });


// getHen()
// .then(hen => getEgg(hen))
// .then(egg => cook(egg))
// .then(meal => console.log(meal));

getHen()
.then(getEgg)
.catch(error =>{
    return 'bread';
})
.then(cook)
.then(console.log)
.catch(console.log); // 중간에 에러가 나도 catch로 잡아낼 수 있음