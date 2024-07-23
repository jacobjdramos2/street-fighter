// Query selector to reference images
const ryu = document.querySelector('img[alt="ryu"]');

// Variable setup
const position = {
    x: 80, 
    y: 110,
};

let velocity = 1;

export function updateRyu(context) {
    // Movement logic
    position.x += velocity;
            
    if (position.x > context.canvas.width - ryu.width|| position.x < 0) {
        velocity = -velocity;
    }
}

export function drawRyu(context) {
    // Draw ryu element
    context.drawImage(ryu, position.x, position.y);
}
