const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = innerWidth
canvas.height = innerHeight

class Player {
    constructor(x, y, radius, color){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }

    draw(){
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI *2, false)
        ctx.fillStyle = this.color;
        ctx.fill()
    }
}

class Projectilie {
    constructor(x, y, radius, color, velocity){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocity = velocity;
    }

    draw(){
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI *2, false)
        ctx.fillStyle = this.color;
        ctx.fill()
    }

    update(){
        this.x += this.velocity.x;
        this.y += this.velocity.y
    }
}

const x = canvas.width / 2;
const y = canvas.height / 2;

const player = new Player(x, y, 30, 'blue');
player.draw();

const projectiles = [];

// const projectile = new Projectilie(
//     canvas.width/2, 
//     canvas.height/2,
//     5,
//     'red',
//     {
//         x: 1,
//         y: 2
//     });

function animate() {
    requestAnimationFrame(animate);
}

animate();

addEventListener('click', (event) => {
    
});
