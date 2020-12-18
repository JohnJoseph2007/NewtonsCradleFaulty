class Ground {
    constructor() {
        this.body = Bodies.rectangle(485, 50, 700, 50, {restitution : 0, isStatic : true});
        World.add(world, this.body);
    }
    display() {
        rectMode(CENTER);
        fill("white");
        rect(485, 50, 700, 50);
    }
}