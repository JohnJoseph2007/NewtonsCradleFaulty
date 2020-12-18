class BobString {
    constructor(bodya, bodyb, offsetx, offsety) {
        this.offsetX = offsetx;
        this.offsetY = offsety;
        var options = {
            bodyA : bodya,
            bodyB : bodyb,
            length : 400,
            stiffness : 0.04,
            pointA : {x:0, y:0},
            pointB : {x:this.offsetX, y:this.offsetY}
        }
        this.body = Matter.Constraint.create(options);
        World.add(world, this.body);
    }

    display() {
        var posa = this.body.bodyA.position;
        var posb = this.body.bodyB.position;
        stroke("black");
        strokeWeight(2);
        line(posa.x, posa.y, posb.x, posb.y);
    }
}