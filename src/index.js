import { Ryu } from './ryu.js';
import { Ken } from './ken.js';
import { Stage } from './stage.js';

const GameViewport = {
    WIDTH: 384,
    HEIGHT: 224,
};

window.onload = function() {
    const canvasEl = document.querySelector('canvas');
    const context = canvasEl.getContext('2d');
    
    // Defines the actual pixel dimensions of the drawing area
    canvasEl.width = GameViewport.WIDTH;
    canvasEl.height = GameViewport.HEIGHT;

    const ryu = new Ryu(80,110,1);
    const ken = new Ken(80,110, -1);
    const stage = new Stage();

    function frame() {
        ryu.update(context);
        ken.update(context);

        stage.draw(context);
        ryu.draw(context);
        ken.draw(context);

        window.requestAnimationFrame(frame);
    }

    // Requests browser to call a user-supplied call-back function before the next repaint
    window.requestAnimationFrame(frame);

}
