

class UserStorage
{
    loginUser(id, password)
    {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if( (id === 'ellie' && password === 'dream') ||
                    (id === 'coder' && password === 'academy'))
                    {
                        resolve(id);
                    }
                    else
                    {
                        reject(new Error('not found'));
                    }   
                }, 2000);
        });
    }
    
    getRoles(user)
    {
        return new Promise((resolve, reject) =>
            {
            if(user === 'ellie')
            {
                resolve({name: 'ellie', role: 'admin'});
            }
            else
            {
                reject(new Error('no access'));
            }
            
        },1000);
    }
}



const userStorage = new UserStorage();
const id = prompt('enter you id');
const password = prompt('enter your password');

userStorage
    .loginUser(id, password)
    .then(user => userStorage.getRoles(user)) // 수정: 메서드 바인딩 문제 해결
    .then(user => {
        alert(`Hello ${user.name}, you have a ${user.role} role`);
    })
    .catch(console.log);

