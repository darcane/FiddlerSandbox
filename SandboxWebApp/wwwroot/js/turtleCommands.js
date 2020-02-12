const comargless = {
    "pd": function () {
        turtle.pen = true;
    },
    "pu": function () {
        turtle.pen = false;
    },
    "cs": function () {
        background(51);
    },
    "ht": function (){
        turtle.showTurtle = false;
    },
    "st": function (){
        turtle.showTurtle = true;
    },
    "home": function (){
        turtle.home();
    }
}
const com1arg = {
    "fd": function (amt) {
        turtle.forward(amt);
    },
    "bk": function (amt) {
        turtle.forward(-amt);
    },
    "rt": function (amt) {
        turtle.rightTurn(amt);
    },
    "lt": function (amt) {
        turtle.rightTurn(-amt);
    },
    "label": function (val){
        print(val);
    }
}
const com2arg = {
    "setxy": function (x,y){
        turtle.setxy(x,y);
    }
}