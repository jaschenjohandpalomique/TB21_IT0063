function animateBox(color) {
    const animatedBox = document.getElementById('animated-box');
    
    
    animatedBox.style.transform = 'scale(1)';
    animatedBox.style.top = '0';
    animatedBox.style.borderColor = 'transparent';
    animatedBox.style.backgroundColor = 'rgba(243, 240, 234, 0.2)'; 
    
    setTimeout(() => {
        
        animatedBox.style.borderColor = color;
        animatedBox.style.backgroundColor = color;  
        animatedBox.style.transform = 'scale(1.2)';
        
        
        animatedBox.style.transition = "transform 0.5s ease-in-out, top 0.5s ease-in-out, background-color 0.5s ease-in-out";  
        animatedBox.style.top = "120%";  
    }, 10);
    
    
    setTimeout(() => {
        animatedBox.style.transform = 'scale(1)';
        animatedBox.style.top = '0';  
        animatedBox.style.backgroundColor = 'rgba(243, 240, 234, 0.2)'; 
    }, 500); 
}
