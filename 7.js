//map - объект, с возможностью составления ключей и значений
//В отличие от других объектов Map может принимать любое значние

const myMap = new Map();

let keyObj = {};
let keyFn = () => {};
let keyNum = 5;

myMap.set('key', 'value');
myMap.set(keyObj, 100_000);
myMap.set(keyFn, 'функция');
myMap.set(keyNum, true);

console.log(myMap); //Map(3)
console.log(myMap.size); //4
console.log(myMap.get('key')); //value
console.log(myMap.get(keyObj)); // 100000//При использовании get, такое же имя как у ключа!!!,

//Пробежать по всем элементам с помощью for/of

//Дополнительные методы Map
myMap.delete(keyObj); //удаляет keyObj
console.log(myMap.has(keyObj)); //false
console.log(myMap.has(keyFn)); //true
//myMap.clear();


for(let item of myMap){
    console.log(item);
}

//Практическая работа

const cities = [
    {id: 123443, name: "Москва"},
    {id: 12434, name: "Санкт-Петербург"},
    {id: 2345, name: "Владивосток"},
    {id: 767, name: "Курск"},
    {id: 9845, name: "Сочи"},
];

let myMap2 = new Map, 
myMap3 = new Map;
cities.forEach( city => {
    myMap2.set(city.id, city.name);
    myMap3.set(city, city.name); //Для отображения всех городов
})
console.log(myMap2.get(767)) //Курск
const myMap3Iterator = myMap3.keys(); //Для отображения всех городов

for(let item of myMap3Iterator){
    console.log(item.name) /*Москва, Санкт-Петербург, Владивосток, Курск, Сочи */
}

//Set - Множество уникальных значений

let mySet = new Set();

mySet.add(10);
mySet.add(10);
mySet.add(20);
mySet.add(30);
mySet.add(30);
mySet.add(30);

console.log(mySet); //{10, 20, 30}
console.log(mySet.has(10)); //true
console.log(mySet.size); //3
console.log(mySet.delete(100)); //false

//Метод для защиты свойств объектов
//Object.freeze(obj1);

//JSON_parse
const JSON_obj = '{"name":"John"}';
const JSON_Str = '"name"';
const JSON_Num = '5';

console.log(JSON.parse(JSON_obj)); //{name: 'John'}
console.log(JSON.parse(JSON_Str)); //name
console.log(JSON.parse(JSON_Num)); //5