const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
console.log(ctx);

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

canvas.width = 600;
canvas.height = 400;

ctx.fillStyle = 'red';
ctx.strokeStyle = 'blue';
ctx.lineWidth = 1;

// ctx.fillRect(100, 100, 400, 200);
// ctx.clearRect(150, 150, 300, 100);
// ctx.strokeRect(200, 200, 50, 20);

// ctx.beginPath();
// ctx.moveTo(100, 100);
// ctx.lineTo(200, 100);
// ctx.lineTo(150, 200);
// // ctx.lineTo(100, 100);
// ctx.closePath();
// ctx.stroke();
// ctx.fill();

// ctx.beginPath();
// ctx.arc(200, 200, 50, 0, Math.PI * 2);
// ctx.moveTo(235, 200);
// ctx.arc(200, 200, 35, 0, Math.PI);
// ctx.moveTo(185, 180);
// ctx.arc(180, 180, 5, 0, Math.PI * 2);
// ctx.moveTo(225, 180);
// ctx.arc(220, 180, 5, 0, Math.PI * 2);
// ctx.moveTo(200, 180);
// ctx.lineTo(200, 210);
// ctx.stroke();
// // ctx.fill();

// ctx.beginPath();
// ctx.strokeStyle = 'black';
// ctx.lineWidth = 1;
// ctx.moveTo(100, 100);
// ctx.arcTo(200, 130, 300, 350, 100);
// ctx.stroke();

// for(let i = 0; i < 4; i++){
//     for(let j = 0; j < 3; j++){
//         ctx.beginPath();
//         const x = 25 + j * 50;
//         const y = 25 + i * 50;
//         const radius = 20;
//         const startAngle = 0;
//         const endAngle = Math.PI + (Math.PI * j) / 2;
//         const antiClockwise = i % 2 !== 0;

//         ctx.arc(x, y, radius, startAngle, endAngle, antiClockwise);
        
//         if(i > 1){
//             ctx.stroke();
//         } else{
//             ctx.fill();
//         }
//     }
// }

// ctx.beginPath();
// ctx.moveTo(100, 100);
// // ctx.lineTo(100, 200);
// ctx.quadraticCurveTo(150, 100, 150, 150);
// ctx.moveTo(100, 100);
// ctx.quadraticCurveTo(100, 150, 150, 150);
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(100, 100);
// ctx.bezierCurveTo(80, 120, 150, 250, 200, 200);
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(75, 25);
// ctx.quadraticCurveTo(25, 25, 25, 62.5);
// ctx.quadraticCurveTo(25, 100, 50, 100);
// ctx.quadraticCurveTo(50, 120, 30, 125);
// ctx.quadraticCurveTo(60, 120, 65, 100);
// ctx.quadraticCurveTo(125, 100, 125, 62.5);
// ctx.quadraticCurveTo(125, 25, 75, 25);
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(75, 40);
// ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
// ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
// ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
// ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
// ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
// ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
// ctx.stroke();

// ctx.beginPath();
// ctx.rect(100, 100, 50, 75);
// ctx.stroke();

// function roundedRect(ctx, x, y, width, height, radius){
//     ctx.beginPath();
//     ctx.moveTo(x, y + radius);
//     ctx.arcTo(x, y + height, x + radius, y + height, radius);
//     ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
//     ctx.arcTo(x + width, y, x + width - radius, y, radius);
//     ctx.arcTo(x, y, x, y + radius, radius);
//     ctx.stroke();
// }

// roundedRect(ctx, 100, 100, 100, 50, 10);

const Particle = {
    x : 100,
    y: 100,
    radius: 8,
    speedX : Math.random() * 6,
    speedY : Math.random() * 6,
}

function draw(){
    ctx.beginPath();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.arc(Particle.x, Particle.y, Particle.radius, 0, Math.PI * 2);
    ctx.strokeStyle = 'white';
    ctx.stroke();
}

function update(){
    //detect collisions
    //Right Side Wall
    if(Particle.x + Particle.radius > canvas.width){
        Particle.speedX = Particle.speedX * -1;
    }

    //Left Side Wall
    if(Particle.x - Particle.radius < 0){
        Particle.speedX = Particle.speedX * -1;
    }

    //Upper Wall
    if(Particle.y - Particle.radius < 0){
        Particle.speedY = Particle.speedY * -1;
    }

    //Lower Wall
    if(Particle.y + Particle.radius > canvas.height){
        Particle.speedY = Particle.speedY * -1;
    }

    Particle.x += Particle.speedX;
    Particle.y += Particle.speedY;
}

window.addEventListener('keydown', (e) => {
    console.log(e.key);

    if(e.key === "ArrowRight" || e.key === "Right"){
        if((Particle.x - Particle.radius) >= (0 - ctx.lineWidth) && (Particle.x + Particle.radius < canvas.width)){
            Particle.x += Particle.speedX;
        }
    } else if(e.key === "ArrowLeft" || e.key === "Left"){
        if((Particle.x - Particle.radius) >= 0 && (Particle.x + Particle.radius) <= canvas.width){
            Particle.x -= Particle.speedX;
        }
    } else if(e.key === "ArrowUp" || e.key === "Up"){
        if((Particle.y - Particle.radius) >= 0 && (Particle.y + Particle.radius) <= canvas.height){
            Particle.y -= Particle.speedY;
        }
    } else if(e.key === "ArrowDown" || e.key === "Down"){
        if((Particle.y - Particle.radius) >= 0 && (Particle.y + Particle.radius) < canvas.height){
            Particle.y += Particle.speedY;
        }
    }
    init();
});

window.addEventListener('keyup', (e) => {
    
});

function init(){
    draw();
    update();
    requestAnimationFrame(init);
}

init();