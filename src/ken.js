// Query selector to reference images
const ken = document.querySelector('img[alt="ken"]');

// Variable setup
const position = {
    x: 80, 
    y: 110,
};

let velocity = -1;

export function updateKen(context) {
    // Movement logic
    position.x += velocity;
            
    if (position.x > context.canvas.width - ken.width|| position.x < 0) {
        velocity = -velocity;
    }
}

export function drawKen(context) {
    // Draw image
    context.drawImage(ken, position.x, position.y);
}
