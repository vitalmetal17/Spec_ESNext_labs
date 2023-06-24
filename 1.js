console.log('Привет МИР')
console.log(2 ** 10)

function fn(a, ...params) { //rest оператор, возвращает всегда массив
    return params
}
console.log(fn(1, 2, 3, 4)) //[2, 3, 4]

console.log(fn(1, 2, ...[3, 4])) // ...-spread оператор, позволяет взять переменные массива и вставить их в функцию

let cat = { name: 'Bars' };
console.log(cat?.head?.eye)//если свойства нет - undefined

console.log(cat.name ?? 'cat') //Bars//если свойство есть не перезаписывается-остался Bars
console.log(cat.color ?? 'grey') //grey//свойства color-нет поэтому принято значение grey

let salary = 100_000 //современная версия отображения чисел

//Новые методы

let a2 = [3, 4];
console.log(a2.includes(4)) //true, false
console.log(a2.indexOf(4) != -1) //старый метод если свойство есть покажется 1
console.log(a2.findIndex(item => {
    return item == 4
}))

let a3 = [1, 2, [3, [[[[4, 5]]]]]];
console.log(a3.flat(99)) //2 у flat необяз парам для указания глубины массива

let s = 'Ехал Грека через реку'
console.log(s.replace(/р/g, 'л'))//старый метод
console.log(s.replaceAll('р', 'л'))//новый

console.log(s.matchAll(/р/g))//новый, получаем ИТЕРАТОР

//ДЕСТРУКТУРИЗАЦИЯ

let a4 = [3, 4];
let [n1, n2] = a4; //значения справа попадают в значения слева. Деструктурирование массива справа

let user = {
    "firstName": "John",
    "height": 180
}
let {firstName, height} = user; //деструктуризация объекта
let {firstName:f, height:h} = user;

console.log(firstName, height);
console.log(f, h);

