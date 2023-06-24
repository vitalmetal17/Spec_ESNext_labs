//Итераторы и генераторы
//Итерированный объект - можно перебирать
//объекты не итеррируемы

let colors = ['red', 'green'];
for (let color of colors) {
    console.log(color); //red green
}

//собственный итератор на ES5

let str = 'Ехал Грека через реку';
function nextChar(str, index) {
    return {
        next: function () {
            return str[index++];
        }
    }
}
const charIterator = nextChar(str, 5);
for (let i = 0; i < 5; i++) {
    console.log(charIterator.next());
}

//Как сделать итериуемым объект
//Symbol-отдельный тип данных, прописываем для итерирования объекта



// let user = {name: 'John'}
// for( let prop of user){
//     console.log(prop);
// }

let user = {
    name: 'John',
    height: 180,
    [Symbol.iterator]: function () { //создаем метод
        let props = [];
        let index = 0;
        for (let i in this) {
            props.push({
                param: i,
                value: this[i]
            })
        }
        console.log(props); //{param: 'name', value: 'John'}
        return {
            next() {
                if (index < props.length) {
                    return { value: props[index++], done: false }
                } else {
                    return { done: true };
                }
            }
        }
    }
}
for (let prop of user) {
    console.log(prop); //{param: 'height', value: 180}
}

/*Получить числа от 0 до 100 с шагом 3 */

const range = {from: 2, to: 100, delta: 3};

range[Symbol.iterator] = function(){
    const {from, to, delta} = this;
    let i = from;
    return {
        next(){
            if( typeof i == 'underfined' ){
                i = from;
            } else {
                i += delta;
            }
            return i < to ? {value: i, done: false}: {done: true};
        }
    }
}
for( let num of range){console.log(num)};

//Явный вызов итератора

let rangeIterator = range[Symbol.iterator]();
console.log(rangeIterator); //5, 8, 11, ...98

let tmp = rangeIterator.next();
console.log(tmp); //{value: 5, done: false}

tmp = rangeIterator.next();
console.log(tmp); //{value: 8, done: false}

tmp = rangeIterator.next();
console.log(tmp); //{value: 11, done: false}

tmp = rangeIterator.next();
console.log(tmp); //{value: 14, done: false}



//Генераторы это функции которые возвращают итераторы...
//Пример создания итератора который бегает по всем дням недели
//У функции пишем звездочку, она становится генератором, следовательно возвращает итератор


let days = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
//признак функции ГЕНЕРАТОРА - *
function* makeIterator(arr){
    for(let i = 0; i < arr.length; i++){
       yield arr[i];  //Илд спец оператор (типа ретерн), отдает результат
    }
}
const dayIterator = makeIterator(days);
// for(let i = 0; i < 7; i++){
//     console.log(dayIterator.next());
// }
for( let i of dayIterator){console.log(i);} //пн, вт, ср, чт, пт, сб, вс

//Построим генератор который возвращает Фибоначчи

function* fibonaciGenerator(){
    let n1 = 0, n2 = 1, n3;
    yield n1;
    yield n2;

    while(true){
        yield n1 + n2; //1
        n3 = n1; //0
        n1 = n2; //1
        n2 = n1 + n3;
    }
}
const fibonaciIterator = fibonaciGenerator();
for(let i = 0; i < 20; i++){
    let result = fibonaciIterator.next();
    console.log(result.value);
}
