import Solid from "./Solid.js";

export default class Planet extends Solid {
    addRes (){
        return this.resourses += 3 * this.square;
    }
}