let editor;
let code;
let turtle;
var shape = "";

function setup() {
  editor = select("#editor");
  let cnv = createCanvas(1130, 800);
  cnv.parent("canvasHolder");

  let commandName = select("#commandName");
  fetch("https://fiddlersandboxapi.azurewebsites.net/api/turtle")
    .then(resp => {
      return resp.json();
    })
    .then(json => {
      commandName.html(json.name);
      shape = json.commands.join(" ");

      return Promise.resolve();
    })
    .then(() => {
      setupInitial();

      return Promise.resolve();
    })
    .catch(err => {
      setupInitial();
      console.log(err);
    });
}

function setupInitial() {
  stroke(255);
  strokeWeight(2);
  angleMode(DEGREES);

  turtle = new Turtle(width / 2, height / 2, -90);
  editor.value(shape);
  editor.input(walkTurtle);
  walkTurtle();

  editor.hide();
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
