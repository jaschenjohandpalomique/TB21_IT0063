document.getElementById("colorButton").addEventListener("click", function() {
    const resumeContainer = document.querySelector(".resume-container");
    const colors = ["#f4f4f4", "#ffeb3b", "#8bc34a", "#2196f3", "#9c27b0"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    resumeContainer.style.backgroundColor = colors[randomIndex];
});

