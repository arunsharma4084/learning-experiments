const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const particlesArray = [];
let hue = 0;

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// const image = document.getElementById("vite");
// console.log(image);

// ctx.drawImage(image, 100, 200, 40, 40);

// ctx.fillStyle = "red";
// ctx.font = "60px Heveletica";
// // ctx.fillText("Arun Sharma", 200, 200);
// ctx.strokeStyle = 'blue';
// ctx.strokeText("Arun Sharma", 200, 200);

canvas.width = 600;
canvas.height = 400;

// ctx.fillStyle = 'green';

const mouse = {
    x: undefined,
    y: undefined
}

// canvas.addEventListener('click', (e) => {
//     mouse.x = e.layerX;
//     mouse.y = e.layerY;
// })

// function drawCircle(){
//     ctx.beginPath();
//     ctx.fillStyle = 'red';
//     ctx.arc(mouse.x, mouse.y, 10, 0, Math.PI * 2);
//     ctx.fill();
// }

class Particle {
    constructor(){
        this.x = mouse.x;
        this.y = mouse.y;
        // this.x = Math.random() * canvas.width;
        // this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1 + 1;
        this.speedX = 0;
        this.speedY = 0;
        this.color = `hsl(${hue} 100% 50%)`;
    }

    draw(){
        ctx.beginPath();
        // this.hue += 15;
        ctx.fillStyle = this.color;
        // ctx.fillStyle = 'white';
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill();
    }

    update(){
        this.x += this.speedX;
        this.y += this.speedY;
        if(this.size > 0.1) this.size -= 0.02;
    }
}

// function init(){
//     for(let i = 0; i < 100; i++){
//         particlesArray.push(new Particle());
//     }
// }

canvas.addEventListener('click', (e) => {
    mouse.x = e.layerX;
    mouse.y = e.layerY;
    for(let i = 0; i < 5; i++){
        particlesArray.push(new Particle());
    }
})

canvas.addEventListener('mousemove', (e) => {
    mouse.x = e.layerX;
    mouse.y = e.layerY;
    for(let i = 0; i < 3; i++){
        particlesArray.push(new Particle());
    }
})

function handleParticles(){
    for(let i = 0; i < particlesArray.length; i++){   
        particlesArray[i].update();
        particlesArray[i].draw();

        for(let j = i; j < particlesArray.length; j++){
            const dx = particlesArray[i].x - particlesArray[j].x;
            const dy = particlesArray[i].y - particlesArray[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if(distance < 50){
                ctx.beginPath();
                ctx.strokeStyle = particlesArray[i].color;
                // ctx.lineWidth = particlesArray[i].size / 10;
                ctx.lineWidth = 0.2;
                ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
                ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
                ctx.stroke();
            }
        }

        if(particlesArray[i].size <= 0.3){
            particlesArray.splice(i, 1);
            i--;
        }
    }
}

function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // ctx.fillStyle = 'hsla(0, 0%, 0%, 0.02)';
    // ctx.fillRect(0, 0, canvas.width, canvas.height);
    handleParticles();
    requestAnimationFrame(animate);
    hue+=5;
}

// init();
animate();