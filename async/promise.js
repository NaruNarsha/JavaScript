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
});


