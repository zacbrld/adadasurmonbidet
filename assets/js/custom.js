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

  document.querySelectorAll('.tab-wrapper').forEach(wrapper => {
    const buttons = wrapper.querySelectorAll('.tab-button');
    const tabs = wrapper.querySelectorAll('.plot-container');
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'));
        tabs.forEach(tab => tab.classList.remove('active'));
  
        button.classList.add('active');
        wrapper.querySelector(`#${button.dataset.target}`).classList.add('active');
      });
    });
  });