//ДЕСТРУКТУРИЗАЦИЯ

function fn(a = 0, b = 1) {
    return [a, b];
}
console.log(fn()); //[0, 1]
console.log(fn(10)); //[10, 1]
console.log(fn(undefined, 20)); //[0, 20]
console.log(fn(...fn(new Array(49)), 5)); //[Array(49), 1]

let nums = [34, 56, 12];
console.log(Math.min(...nums)) //12
console.log(Math.max(...nums)) //56
console.log(Math.max.apply(null, nums)) //56

//Деструктуризация парметров в объектах
function fn2({ firstName }) {
    return `Привет, ${firstName}`
}
let user2 = { firstName: 'Anna', height: 180 } //точечное указание свойств переменных
console.log(fn2(user2))

//Стрелочные функции
//нет аргументов
//нет this

//Поиск среднего числа
const avg = (...p) => { 
    let sum = 0;
    for (let i = 0; i < p.length; i++){
        sum += p[i];
    }
    return sum / p.length;
}
console.log(avg(10, 20, 30, 40, 50));

//this
function fn4(n) {
    const fn = m => {
        console.log(this, arguments);
    }
    fn(200); //200 не запишется 
}
console.log(fn4(500));

const sum = (a, b) => a + b;
console.log( sum(10, 20)); //30

//const add5 = n => n + 5;
const add5 = (n) => (n + 5);

//Функции для шаблонизации строк

function pre(str) {
    return `<pre>${str}</pre>`
}
console.log(pre`Привет, Мир!`);

//"Хороший пример шаблонизации"
// function lighting(string, ...parts){
//     let result = '';

//     for(let i = 0; i < parts.length; i++){
//         result += `${strings[i]} <b>${parts[i]}</b>`;
//     }
//     return += strings[parts.length];

//     return result;
// }
// let user = {name: 'John', salary: 100_000}
// const text = lighting `Привет, ${user.name}!
// Твоя зарплата ${user.salary}`;
// console.log(text);

//Создание стилей ДОМ элементов
//пробежали по параметрам div и сформировали свой div у которого inlineCSS свойства
const styleDiv = (inlineCSS) => {
    let div = document.createElement('div');
    inlineCSS = inlineCSS[0];
    inlineCSS = inlineCSS.replaceAll('\n', '');
    inlineCSS = inlineCSS.split(';');
    inlineCSS.pop();
    inlineCSS = inlineCSS.map(item => {
        let [prop, value] = item.split(':');
        return [prop, value];
    })
    for (let item in inlineCSS) {
        div.style[inlineCSS[item][0]] = inlineCSS[item][1]
    }
    return div
}
let div = styleDiv`
color: red;
background: green;
`;
div.innerHTML = 'Привет Витал'
document.body.appendChild(div);

//Работа с короткими свойствами

let duration = 45;
let title = 'JS';

let course = { title, duration };
console.log(course) //{title: 'JS', duration: 45}

//////////////////////////////////////////////////////////////////////////////////////////////
let duration1 = 45;
let title1 = 'JS';
let propPrice1 = 'price';
//создание на лету свойств объекта
let course1 = {
    title1,
    duration1,
    [propPrice1]: 10_000,
    [propPrice1 + 'WithTax']: 10_000 * 1.1,
};
console.log(course1) //{title1: 'JS', duration1: 45, price: 10000, priceWithTax: 11000}

//Метод объекта Эсайн (assing())-на основе одного объекта позволяет создать новый

let course3 = Object.assign({}, course1, { title: 'MongoDB' }); //создание нового объекта+добавление title: 'MongoDB'
console.log(course3) //{title1: 'JS', duration1: 45, price: 10000, priceWithTax: 11000, title: 'MongoDB'}

//МЕТОДЫ ОБЪЕКТОВ

let obj3 = {
    info() {
        return 'инфо'
    }
}
console.log(obj3.info()); //инфо

//Геттеры и Сеттеры

let obj4 = {
    cost: 1000,
    info() { return 'инфо' },
    set price(value) { this.cost = value; },
    get priceWithTax() { return this.cost * 1.1 }
}
console.log(obj4.info()); //инфо

console.log(obj4.priceWithTax); //1100
obj4.price = 5000;
console.log(obj4.priceWithTax); //5500
obj4.price = 9000;
console.log(obj4.priceWithTax); //9900

//Практика 1
/* Плавный переход по цветам 
10 шагов*/

let color1 = '#336699';
let color2 = '#ff0000';
let steps = 10;

const gradient = (color1, color2, steps = 10) => {
    const rgb = color => {
        let red = parseInt(color.slice(1, 3), 16);
        let green = parseInt(color.slice(3, 5), 16);
        let blue = parseInt(color.slice(5), 16);
        return { red, green, blue };
    };
    const calcColor = (color, i) => (
        Math.floor(color1[color] + i * (color2[color] - color1[color]) / steps)
    );


    const colors = [];
    color1 = rgb(color1);
    color2 = rgb(color2);

    for (let i = 0; i < steps; i++) {
        let red = calcColor('red', i);
        let green = calcColor('green', i);
        let blue = calcColor('blue', i);


        colors.push(
            `rgb(${red}, ${green}, ${blue})`
        )
    }
    return [...colors, color2]
}
console.log(gradient(color1, color2));
/*(11) ['rgb(51, 102, 153)', 'rgb(71, 91, 137)', 'rgb(91, 81, 122)', 
'rgb(112, 71, 107)', 'rgb(132, 61, 91)', 'rgb(153, 51, 76)', 'rgb(173, 40, 61)',
 'rgb(193, 30, 45)', 'rgb(214, 20, 30)', 'rgb(234, 10, 15)', {…}] */

