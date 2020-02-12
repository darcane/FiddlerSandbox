let globAng = 0;
let globX = 0;
let globY = 0;
class Turtle {
    constructor(x, y, ang) {
        this.x = x;
        this.y = y;
        this.ang = ang;
        this.pen = true;
    }

    reset() {
        translate(this.x, this.y);
        globX = this.x;
        globY = this.y;
        globAng = -this.ang;
        rotate(this.ang);
        this.pen = true;
        this.showTurtle = true;
    }

    forward(len) {
        len = parseInt(len);
        if (this.pen) line(0, 0, len, 0);
        globX += len * cos(globAng);
        globY += len * sin(globAng);
        translate(len, 0);
    }

    rightTurn(ang) {
        ang = parseInt(ang);
        if(ang){
            rotate(ang);
            globAng += (-ang);
        }
    }

    home(){
        this.setxy(this.x,this.y);
    }

    setxy(x,y){
        let ang = atan(abs(globY-y)/abs(globX-x));
        let tempGlobAng = globAng;
        this.rightTurn(globAng);
        //region 1
        if(globX > x && globY > y) ang = 180 - ang;
        //region 2
        else if(globX < x && globY > y) ang = ang;
        //region 3
        else if(globX < x && globY < y) ang = -ang;
        //region 4
        else if(globX > x && globY < y) ang = 180 + ang;
        this.rightTurn(ang);
        let dist = sqrt((globX-x)*(globX-x)+(globY-y)*(globY-y));
        this.forward(dist);
        this.rightTurn(-ang);
        this.rightTurn(-tempGlobAng);
    }

    show() {
        let s = 4;
        if (this.showTurtle) {
            push();
            stroke(255,0,0);
            if(this.pen) fill(255,0,0);
            else noFill();
            rotate(this.ang);
            triangle(-s, -s, 0, 2*s, s, -s);
            pop();
        }
    }
}