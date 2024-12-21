document.querySelectorAll('.tab-wrapper').forEach(wrapper => {
  const buttons = wrapper.querySelectorAll('.tab-button'); // Boutons dans ce groupe
  const tabs = wrapper.querySelectorAll('.plot-container'); // Contenus dans ce groupe

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      // Désactiver tous les boutons et contenus de ce groupe
      buttons.forEach(btn => btn.classList.remove('active'));
      tabs.forEach(tab => {
        tab.style.opacity = 0.4; // Réduire l'opacité
        tab.style.pointerEvents = "none"; // Désactiver l'interaction
      });

      // Activer le bouton cliqué
      button.classList.add('active');

      // Activer le contenu correspondant
      const target = wrapper.querySelector(`#${button.dataset.target}`);
      target.style.opacity = 1; // Rendre visible
      target.style.pointerEvents = "auto"; // Activer l'interaction
    });
  });
});