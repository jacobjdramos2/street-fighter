// Assign Ryu the img element
const ryuBackground = document.querySelector('img[alt="ryuBackground"]');

export function drawRyuBackground(context) {
    context.drawImage(ryuBackground, 0, 0);
}
