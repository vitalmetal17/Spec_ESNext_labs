export default class Solid {
    x;
    y;
    resourses = 0;
    square;

    constructor(x, y, square){
        this.x = x;
        this.y = y;
        this.resourses = 0;
        this.square = square;
    
        }

    get res(){
        return this.resourses;
    }
    addRes(){
        return this.resourses += 1;
    }
}