const canvas = document.querySelector("canvas");
const c = canvas.getContext('2d');

// canvas.height = window.innerHeight
// canvas.width = window.innerWidth

canvas.height = 600
canvas.width = 800


class Circle {
    constructor() {
        this.x= Math.random() * (canvas.width) + 50;
        this.y= Math.random() * (canvas.height) + 50;
        this.size= document.getElementById("circleSize").value;
        this.movex=  Math.random()/2 - 1 ;
        this.movey=  Math.random()/2 - 1;
        this.color = '#'+(Math.random()*0xFFFFFF<<0).toString(16)
    }
  }



// ------------- nombre cercle
var lstCircle = []
var nbCircleInput = document.getElementById("nbCircle");

for (let i = 0; i < nbCircleInput.value; i++) {
    lstCircle.push(new Circle())
}
nbCircleInput.addEventListener("input", function () {
    if  (nbCircleInput.value > lstCircle.length){
        for (let i = 0; i < nbCircleInput.value - lstCircle.length; i++) {
            lstCircle.push(new Circle())
        }
    }
    else if (nbCircleInput.value < lstCircle.length){
        for (let i = 0; i <  lstCircle.length - nbCircleInput.value; i++) {
            lstCircle.pop()
        }
    }
});


// ----------- taille cercle
var circleSizeInput = document.getElementById("circleSize");
circleSizeInput.addEventListener("input", function () {
    
    lstCircle.forEach((circle) => {
        circle.size = circleSizeInput.value;
        drawcircle(circle);
      });
});

/// ------------ dessin
var isDrawingInput = document.getElementById("isDrawing");
var isDrawing = false
isDrawingInput.addEventListener("input", function () {
    
    isDrawing = isDrawingInput.checked;
    console.log("fghj")
});

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
        ci.movex *= -1
    }
    if (ci.y >= canvas.height - ci.size || ci.y - ci.size <= 0) {
        ci.movey *= -1
    }

    // lstCircle.forEach((othCircle) => {
    //     if (ci != othCircle){
    //         let zizi = Math.round(ci.x) + Math.round(ci.size)
    //         console.log(zizi)
    //         console.log(Math.round(othCircle.x))
    //         if ( Math.round(ci.x) + Math.round(ci.size) == Math.round(othCircle.x) && Math.round(ci.y) == Math.round(othCircle.y)) {
    //             othCircle.movex *= -1
    //             ci.movex *= -1
    //             console.log("eyuy")
    //         }
    //     }
        
    // });
    
    ci.x += ci.movex;
    ci.y += ci.movey
}

setInterval(function () {
    if (!isDrawing){
        clearCanvas();
    }

    lstCircle.forEach((circle) => {
        changeDirection(circle)
        drawcircle(circle);
      });
}, 2);
