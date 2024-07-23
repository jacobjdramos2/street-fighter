export class Stage {
    constructor() {
        // Assign Ryu the img element
        this.image= document.querySelector('img[alt="ryuBackground"]');
    }

    update() {}
    
    draw(context) {
        context.drawImage(this.image, 0, 0);
    }
}
