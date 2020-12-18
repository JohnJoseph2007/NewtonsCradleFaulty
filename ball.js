class Ball {
    constructor(x) {
        var options = {
            restitution : 0.3,
            isStatic : false,
            friction : 0.5,
            density : 1.2
        }
        this.body = Bodies.circle(x, 240, 70, options);
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        fill("pink");
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, 70);
    }
}