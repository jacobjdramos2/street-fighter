import { Ryu } from './entities/fighters/Ryu.js';
import { Ken } from './entities/fighters/Ken.js';
import { Stage } from './entities/Stage.js';
import { FpsCounter } from "./entities/FpsCounter.js"

const GameViewport = {
    WIDTH: 384,
    HEIGHT: 224,
};

window.addEventListener('load', function() {
    const canvasEl = document.querySelector('canvas');
    const context = canvasEl.getContext('2d');
    
    // Defines the actual pixel dimensions of the drawing area
    canvasEl.width = GameViewport.WIDTH;
    canvasEl.height = GameViewport.HEIGHT;

    const entities = [
        new Stage(),
        new Ryu(80, 110, 150),
        new Ken(240, 110, -150),
        new FpsCounter(),
    ]

    let previousTime = 0;
    let secondsPassed = 0;

    function frame(time) {
        window.requestAnimationFrame(frame);

        secondsPassed = (time - previousTime) / 1000;
        previousTime = time;

        for (const entity of entities) {
            entity.update(secondsPassed, context);
        }

        for (const entity of entities) {
            entity.draw(context);
        }

        // Use this to calculate the time for each frame
        console.log(time);
    }

    // Requests browser to call a user-supplied call-back function before the next repaint
    window.requestAnimationFrame(frame);

});
