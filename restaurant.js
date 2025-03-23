document.addEventListener("DOMContentLoaded", function() {
    function openModal(event) {
        let img = event.target; 
        let card = img.closest(".restaurant-card");

        if (!card) return; 

        let title = card.querySelector(".card-title")?.innerText || "No Title";
        let description = card.querySelector(".card-description")?.innerText || "No description available.";

        document.getElementById("imageModalLabel").innerText = title;
        document.getElementById("modalImage").src = img.src;
        document.getElementById("modalDescription").innerText = description;

        let modal = new bootstrap.Modal(document.getElementById("imageModal"));
        modal.show();
    }

    document.addEventListener("click", function(event) {
        if (event.target.matches(".restaurant-card img")) {
            openModal(event);
        }
    });

    document.getElementById("closeAll").addEventListener("click", function() {
        console.log("Main Menu clicked! You can still open images.");
    });
});
