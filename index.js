const GameViewport = {
    WIDTH: 384,
    HEIGHT: 224,
};

window.onload = function() {
    const canvasEl = document.querySelector('canvas');
    const context = canvasEl.getContext('2d');
    
    // Defines the actual pixel dimensions of the drawing area
    canvasEl.width = 384;
    canvasEl.height = 224;

    // Assign Ryu the img element
    const [ryu, ryuBackground] = document.querySelectorAll('img')

    const position = {
        x: GameViewport.WIDTH / 2 - ryu.width /2, 
        y: 110,
    };

    let velocity = 1;

    function frame() {
        position.x += velocity;
        
        if (position.x > GameViewport.WIDTH - ryu.width|| position.x < 0) {
            velocity = -velocity;
        }

        // Clears any previous content the canvas may have had in the previous frame
        // NOT NEEDED since background covers background area
        // context.clearRect(0, 0, GameViewport.WIDTH, GameViewport.HEIGHT);

        context.drawImage(ryuBackground, 0, 0);

        // Code for yellow cross
        // context.strokeStyle = 'yellow';
        // context.moveTo(0,0);
        // context.lineTo(GameViewport.WIDTH, GameViewport.HEIGHT);
        // context.moveTo(GameViewport.WIDTH, 0);
        // context.lineTo(0, GameViewport.HEIGHT);
        // context.stroke();

        // Draw the ryu element
        context.drawImage(ryu, position.x, position.y);

        window.requestAnimationFrame(frame);
    }

    // Requests browser to call a user-supplied call-back function before the next repaint
    window.requestAnimationFrame(frame);

    // console.log(context)
}
