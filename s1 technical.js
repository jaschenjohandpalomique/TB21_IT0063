document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("colorButton");
    const container = document.querySelector(".resume-container");

    const colors = ["#FFD700", "#87CEEB", "#90EE90", "#FF6347", "#DDA0DD"];
    let index = 0;

    button.addEventListener("click", function () {
        container.style.backgroundColor = colors[index];
        index = (index + 1) % colors.length;
    });
});
