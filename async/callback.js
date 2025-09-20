'use strict';


// JavaScript is synchronous. 자바 스크립트는 동기적이다.
// Execute the code block by order after hoisting.
// - hoisting이 된 이후부터 코드 블럭이 순서대로 실행된다.

// hoisting: var, function declaration이 자동적으로 선언들이 제일 위로 올라가는 것

// Synchronous callback :: 동기화 콜백 
function printImmediately(print){
    print();
}

// Asynchronous callback :: 비동기화 콜백
function printWithDelay(print, timeout)
{
    setTimeout(print, timeout);
}


console.log('1');

setTimeout(() => console.log('2'), 1000); // 1000ms = 1s

console.log('3');

printImmediately(() => console.log('hello'));

printWithDelay(() => console.log('async callback'), 2000); // 2000ms = 2s




// 콜백 지옥(callback hell) 예제 ===================================================


class UserStorage
{
    loginUser(id, password, onSuccess, onError)
    {
        setTimeout(() => {
            if( (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy'))
                {
                    onSuccess(id);
                }
                else
                {
                    onError(new Error('not found'));
                }   
            }, 2000);
    }


    getRoles(user, onSuccess, onError)
    {
        setTimeout(() =>{
            if(user === 'ellie')
            {
                onSuccess({name: 'ellie', role: 'admin'});
            }
            else
            {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}


const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage.loginUser(
    id, 
    password,
    user => { 
        userStorage.getRoles(
            user, 
            userWithRole => {
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
            },
            error => {
                console.log(error);
            }
        );
    }, 
    error => {
        console.log(error);
    }
);
