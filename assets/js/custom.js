document.addEventListener("DOMContentLoaded", function () {
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabContents = document.querySelectorAll(".plot-container");
  
    tabButtons.forEach(button => {
      button.addEventListener("click", () => {
        // Retire la classe active de tous les boutons et conteneurs
        tabButtons.forEach(btn => btn.classList.remove("active"));
        tabContents.forEach(content => content.classList.remove("active"));
  
        // Ajoute la classe active au bouton et conteneur sélectionnés
        button.classList.add("active");
        const targetId = button.getAttribute("data-target");
        document.getElementById(targetId).classList.add("active");
      });
    });
  });