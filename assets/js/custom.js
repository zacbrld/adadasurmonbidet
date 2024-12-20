document.querySelectorAll('.tab-wrapper').forEach(wrapper => {
  const buttons = wrapper.querySelectorAll('.tab-button'); // Boutons de ce groupe
  const tabs = wrapper.querySelectorAll('.plot-container'); // Contenus de ce groupe

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      // Retirer l'état actif de tous les boutons et contenus
      buttons.forEach(btn => btn.classList.remove('active'));
      tabs.forEach(tab => {
        tab.style.opacity = 0.4; // Réduire l'opacité
        tab.style.pointerEvents = "none"; // Désactiver l'interaction
      });

      // Ajouter l'état actif au bouton cliqué
      button.classList.add('active');

      // Activer le contenu correspondant
      const target = wrapper.querySelector(`#${button.dataset.target}`);
      target.style.opacity = 1; // Rendre visible
      target.style.pointerEvents = "auto"; // Activer l'interaction
    });
  });
});