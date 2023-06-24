import Solid from "./Solid.js";

export default class Asteroid extends Solid {
    addRes (){
        return this.resourses +=  this.square;
    }
}