/*Игровой пример */

import { rand } from "./5/rand.js";
import Asteroid from "./5/Asteroid.js";
import Planet from "./5/Planet.js";
import Star from "./5/Star.js";


let stars = [];
for (let i = 0; i < 10; i++) {
    stars.push(new Star(rand(0, 100), rand(0, 100), rand(10, 20)));
}
let planets = [];
for (let i = 0; i < 50; i++) {
    planets.push(new Planet(rand(0, 100), rand(0, 100), rand(10, 20)));
}
let asteroids = [];
for (let i = 0; i < 500; i++) {
    asteroids.push(new Asteroid(rand(0, 100), rand(0, 100), rand(1, 5)));
}

console.log(stars)
console.log(planets)
console.log(asteroids)

//Добавляем ресурсы для объектов с добавлением по времени
const universe1 = [...stars, ...planets, ...asteroids];

setInterval(() => {
    let summaryResourse = 0;
    universe1.forEach( item => {
        summaryResourse += item.addRes();
    })
    console.log(summaryResourse);
}, 10000)