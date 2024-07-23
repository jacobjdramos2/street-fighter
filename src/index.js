import { drawRyu, updateRyu } from "./ryu.js";
import { drawRyuBackground } from "./stage.js";
import { drawKen, updateKen } from "./ken.js";
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

    function frame() {
        updateRyu(context);
        updateKen(context);

        drawRyuBackground(context);
        drawRyu(context);
        drawKen(context);

        window.requestAnimationFrame(frame);
    }

    // Requests browser to call a user-supplied call-back function before the next repaint
    window.requestAnimationFrame(frame);

}
