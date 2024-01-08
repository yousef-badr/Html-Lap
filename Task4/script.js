const canvas = document.getElementById('canva');
const ctx = canvas.getContext('2d');

const startX = 0;
const startY = 0;
const endX = 500;
const endY = 500;  
const speed = 5;
const multiplier = 10; 

let currentX = startX;
let currentY = startY;

function drawLineSegment(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.strokeStyle = "red"; 
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    }

function animateLine() {
    if (currentX < endX) {
        currentX += speed;
    } else if (currentY < endY) {
        currentY += speed;
    } else{
        return alert("animation end");
    }
        

const dx = currentX - startX;
const dy = currentY - startY;

for (let i = 0; i < multiplier; i++) {
    const segmentLength = (dx * (i + 1)) / multiplier;
        drawLineSegment(startX, startY, startX + segmentLength, startY + segmentLength);
    }
        requestAnimationFrame(animateLine);
    }

animateLine();

