// async & await
// clear style of using promise 

// 1. async
// function fetchUser(){
//     // do network requst in 10 secs....

//     return new Promise((resolve, reject) => {
//         resolve('ellie');
//     });
// }

async function fetchUser()
{
    // do network requst in 10 secs....
    return 'ellie';
}
const user = fetchUser();
user.then(console.log);
console.log(user);


// 2. await 
function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple()
{
    await delay(1000);
    return 'apple';
}

async function  getBanana(){
    await delay(1000);
    return 'banana';
}

// 메서드 체이닝 때문에.. 복잡해진다.. 콜백지옥..
// function pickFruits(){
//     return getApple()
//         .then(apple => {
//             return getBanana()
//                 .then(banana => `${apple} + ${banana}`);
//         })
// }


async function pickFruits() {

    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;

    return `${apple} + ${banana}`;
}


pickFruits().then(console.log);


//-----------------------------------------------------------------------

// 3. useful Promise APIs
function pickAllFruits(){
    return Promise.all([getApple(), getBanana()])
            .then(fruits => {
                fruits.join(' + ');
            });
}

pickAllFruits().then(console.log);