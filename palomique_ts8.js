document.addEventListener("DOMContentLoaded", function() {
    const flexDirectionSelect = document.getElementById("flex-direction");
    const justifyContentSelect = document.getElementById("justify-content");
    const alignItemsSelect = document.getElementById("align-items");
    const flexWrapSelect = document.getElementById("flex-wrap");
    const flexContainer = document.getElementById("flex-container");
    const resetButton = document.getElementById("reset-button");
  
 
    function updateFlexbox() {
      flexContainer.style.flexDirection = flexDirectionSelect.value;
      flexContainer.style.justifyContent = justifyContentSelect.value;
      flexContainer.style.alignItems = alignItemsSelect.value;
      flexContainer.style.flexWrap = flexWrapSelect.value;
    }
  

    flexDirectionSelect.addEventListener("change", updateFlexbox);
    justifyContentSelect.addEventListener("change", updateFlexbox);
    alignItemsSelect.addEventListener("change", updateFlexbox);
    flexWrapSelect.addEventListener("change", updateFlexbox);
  
  
    resetButton.addEventListener("click", function() {
      
      flexDirectionSelect.value = "row";
      justifyContentSelect.value = "flex-start";
      alignItemsSelect.value = "flex-start";
      flexWrapSelect.value = "nowrap";
  
 
      flexContainer.style.flexDirection = "row";
      flexContainer.style.justifyContent = "flex-start";
      flexContainer.style.alignItems = "flex-start";
      flexContainer.style.flexWrap = "nowrap";
    });
  
   
    flexContainer.addEventListener("click", function(e) {
      if (e.target.classList.contains("flex-item")) {
        e.target.style.backgroundColor = e.target.style.backgroundColor === "#3498db" ? "#e74c3c" : "#3498db";
      }
    });
  });
  
