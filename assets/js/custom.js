document.querySelectorAll('.tab-wrapper').forEach(wrapper => {
  const buttons = wrapper.querySelectorAll('.tab-button');
  const tabs = wrapper.querySelectorAll('.plot-container');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      // Désactiver tous les boutons
      buttons.forEach(btn => btn.classList.remove('active'));

      // Ajuster l'opacité des contenus
      tabs.forEach(tab => {
        if (tab.id === button.dataset.target) {
          tab.style.opacity = 1; // Mettre en avant le graphique actif
          tab.style.pointerEvents = "auto"; // Permettre l'interaction
        } else {
          tab.style.opacity = 0.4; // Atténuer le graphique inactif
          tab.style.pointerEvents = "none"; // Désactiver l'interaction
        }
      });

      // Activer le bouton cliqué
      button.classList.add('active');
    });
  });
});
