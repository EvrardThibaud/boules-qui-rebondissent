const canvas = document.querySelector("canvas");
const c = canvas.getContext('2d');

canvas.height = window.innerHeight
canvas.width = window.innerWidth

class Circle {
    constructor(y,movex) {
        this.x= 100;
        this.y= y;
        this.size= 20;
        this.movex=  movex;
        this.movey=  0;
        this.color = '#'+(Math.random()*0xFFFFFF<<0).toString(16)
    }
  }


// ------------- nombre cercle
var lstCircle = []

for (let i = 1; i < 8; i++) {
    lstCircle.push(new Circle(40*i,i))
    console.log("fghj")
}


function drawcircle(ci) {
    c.beginPath();
    c.arc(ci.x, ci.y, ci.size, 0, Math.PI * 2, false);
    c.fillStyle = ci.color;
    c.fill();
    
}

function clearCanvas() {
    c.clearRect(0, 0, canvas.width, canvas.height);
}

function changeDirection(ci){
    if (ci.x >= canvas.width - ci.size || ci.x - ci.size <= 0) {
        ci.x -= ci.movex
        ci.movex *= -1
    }
    if (ci.y >= canvas.height - ci.size || ci.y - ci.size <= 0) {
        ci.y -= ci.movey
        ci.movey *= -1
        
    }
    ci.x += ci.movex;
    ci.y += ci.movey
}

setInterval(function () {
    clearCanvas();

    lstCircle.forEach((circle) => {
        changeDirection(circle)
        drawcircle(circle);
      });
}, 2);
