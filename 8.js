//Промисы
//Асинхронность через функцию обратного вызова
//callBack


function fn1(a, b, callBack) {
    let result = a + b;
    callBack(result);
}
function fn2(res) {
    //alert(res); //12
}
fn1(5, 7, fn2)

//Promise - Позволяет реализовать асинхр код (3 состояния)

const p1 = new Promise((resolve, reject) => {
    resolve('test');
});

p1.then(result => {
    console.log(result);
});

console.log(new Date().toLocaleDateString());

//Практическая работа
//Создать Promise, определяющий четность нечетность числа
//Если число нечетное, сделать resolve ('нечетно')
//В качестве аргумента then - пердать функцию выводящую результат в консоль

const p2 = new Promise((resolve, reject) => {
    const i = Math.round(Math.random() * 100);
    i % 2 ? resolve(`нечетное ${i}`) : reject(`четное ${i}`);
});
p2
    .then(result => console.log(result))
    .catch(result => console.log(`%cОшибка, ${result}`, 'color:red'))

//Fetch запрос из 9го файла json

fetch('/9.json')
    .then(result => result.json())
    .then(body => console.log(body));

//Практическая задача
//Вывести в консоль список имен jsonplaceholder

const URL = 'https://jsonplaceholder.typicode.com/users';
fetch(URL)
    .then(result => result.json())
    .then(users => users.forEach(user => {
        console.log(user.name)
    }));


//promiseAll

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => { resolve('p3') }, 3000);
});
const p4 = new Promise((resolve, reject) => {
    setTimeout(() => { resolve('p4') }, 5000);
});
const p5 = new Promise((resolve, reject) => {
    setTimeout(() => { resolve('p5') }, 10000);
});

const pAll = Promise.all([p3, p4, p5]);
pAll.then(values => {
    console.log(`Готово ALL!`, values) //Готово! (3) ['p3', 'p4', 'p5']
})

const pRace = Promise.race([p3, p4, p5]);
pRace.then(values => {
    console.log(`Готово Race!`, values) //Готово Race! p3 (самый быстрый таймер)
})

//Асинхронные функции. Если написано асинх, возвращается промис
//Когда создаем асинх функцию, можно запланировать дополнительный промис ("await")
//await - можно использовать только в асинх функциях

async function fn7() {
    return 10;
}

const p6 = fn7();
p6.then(result => console.log(result)) //10
//console.log(fn7()); //10

//Пример когда дожидаемся 
//два разных значения и выполняем функцию(значения могут быть из разных источников)

const p11 = new Promise((resolve, reject) => {
    setTimeout(() => { resolve(35) }, 1000);
});
const p12 = new Promise((resolve, reject) => {
    setTimeout(() => { resolve(35) }, 2000);
});
async function fn8() {
    let summa = 0;
    let a = await p11;
    let b = await p12;
    return a + b;
}
const p8 = fn7();
p8.then(result => console.log(result))


//Найти все посты конкретного пользователя jsonplasehold...
const getPostByUser = async (name) => {
    const users = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(result => result.json());
    const userId = users.filter(user => user.name == name)[0]["id"];

    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then((response) => response.json());
    return posts;
}
getPostByUser("Leanne Graham")
    .then(posts => console.log(`Количество постов: ${posts.length}`))
    .catch(error => console.log(error));

//Пример асинхронного итератора "for await of"

const asyncIterator = {
    [Symbol.asyncIterator]() {
        const usersPromise = fetch('https://jsonplaceholder.typicode.com/users')
            .then(result => result.json());
        return {
            i: 0,
            async next() {
                const users = await usersPromise;
                if (this.i < users.length) {
                    return { value: users[this.i++], done: false };
                }
                return { done: true };
            }
        }
    }
};
(async function () {
    for await (let item of asyncIterator) {
        console.log(item);
    }
})();
