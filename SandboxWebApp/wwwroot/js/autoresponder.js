let editor;
let code;
let turtle;
const initialShape =
  "pu lt 45 fd 80 rt 135 pd fd 40 rt 60 fd 60 rt 60 fd 60 rt 60 fd 40 rt 120 fd 60 lt 60 fd 60 pu rt 120 fd 60 pd fd 40 rt 60 fd 60 rt 60 fd 60 rt 60 fd 40 rt 120 fd 60 lt 60 fd 60 ht";

function setup() {
  editor = select("#editor");
  let cnv = createCanvas(1130, 800);
  cnv.parent("canvasHolder");

  let commandName = select("#commandName");

  fetch("https://fiddlersandboxapi.azurewebsites.net/api/turtle")
    .then(resp => {
      console.log(resp);
      return resp.json();
    })
    .then(json=>{
        console.log(json);
        commandName.html(json.Name);
        initialShape = json.Commands.join(' ');
    })
    .catch(err => {
      console.log(err);
    });

  stroke(255);
  strokeWeight(2);
  angleMode(DEGREES);

  turtle = new Turtle(width / 2, height / 2, -90);
  editor.value(initialShape);
  editor.input(walkTurtle);
  walkTurtle();
}

function walkTurtle() {
  background(51);
  push();
  globAng = 0;
  globX = width / 2;
  globY = height / 2;
  turtle.reset();
  code = editor.value();

  let tokens = code.split(" ");

  for (let i = 0; i < tokens.length; i++) {
    if (comargless[tokens[i]]) {
      comargless[tokens[i]]();
    } else if (com1arg[tokens[i]] && tokens[i + 1]) {
      com1arg[tokens[i]](tokens[i + 1]);
    } else if (com2arg[tokens[i]] && tokens[i + 1] && tokens[i + 2]) {
      com2arg[tokens[i]](tokens[i + 1], tokens[i + 2]);
    }
  }
  turtle.show();
  pop();
}

function draw() {}
