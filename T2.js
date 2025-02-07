function animateBox(color) {
    const animationArea = document.querySelector('.animation-area');
    const oldBox = document.getElementById('animated-box');

    const newBox = document.createElement('div');
    newBox.id = 'animated-box';
    newBox.style.width = '300px';
    newBox.style.height = '300px';
    newBox.style.backgroundColor = color;
    newBox.style.border = `6px solid ${color}`;
    newBox.style.position = 'absolute';
    newBox.style.top = '-100%'; 
    newBox.style.transition = 'top 2s ease-in-out, background-color 1.5s ease-in-out, opacity 1.5s ease-in-out';

    animationArea.appendChild(newBox); 

    setTimeout(() => {
        newBox.style.top = '0';
    }, 10);

    if (oldBox) {
        oldBox.style.transition = 'top 2s ease-in-out, opacity 1.5s ease-in-out';
        oldBox.style.top = '100%'; 
        oldBox.style.opacity = '0'; 
    }

    setTimeout(() => {
        newBox.style.backgroundColor = 'rgba(255, 255, 255, 0.5)'; 
    }, 2000);

    setTimeout(() => {
        newBox.style.backgroundColor = 'transparent'; 
    }, 3500);

    if (oldBox) {
        setTimeout(() => {
            oldBox.remove();
        }, 2500);
    }
}
