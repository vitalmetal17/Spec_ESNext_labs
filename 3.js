//Классы, конструкторы

class Card{
    from;
    qqq;
    to;
    constructor(from, to, qqq){
        this.from = from;
        this.qqq = qqq;
        this.to = to;
    }
}
const c1 = new Card('Пекин', 'Москва', 1000);
console.log(c1); //Card {from: 'Пекин', to: 'Москва'}

//Наследование классов

class EducationalProduct {
    constructor(title, price){
        this.title = title;
        this.price = price;
    }
    props(){
        for(let i in this){
            console.log(`${i} = ${this[i]}`)
        }
    }
}
class Webinar extends EducationalProduct {
    constructor(title, price, qty){
        super(title, price); //Ключевое слово super - для вызова функций, принадлежащих родителю объекта.
        this.quantity = qty;
    }
}
class Practice extends EducationalProduct {
}
let w1 = new Webinar('Как собирать с Parsel.js', 1, 100);
let w2 = new Webinar('Как тестировать с Jest.js', 1, 200);
let p1 = new Practice('MongoDB', 8, 20);
w1.props(); //Вывод классов без console.log
w2.props(); //Вывод классов без console.log
p1.props(); //Вывод классов без console.log

console.log(w1.constructor, w2.constructor, p1.constructor);
console.log(w1 instanceof EducationalProduct);
console.log(w1 instanceof Webinar);
console.log(w1 instanceof Practice);
