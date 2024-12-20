// Script pour gérer les onglets indépendants
document.querySelectorAll('.tab-wrapper').forEach(wrapper => {
  const buttons = wrapper.querySelectorAll('.tab-button'); // Sélectionner les boutons dans chaque section
  const tabs = wrapper.querySelectorAll('.plot-container'); // Sélectionner les contenus associés

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      // Désactiver tous les boutons et contenus de cette section
      buttons.forEach(btn => btn.classList.remove('active'));
      tabs.forEach(tab => tab.classList.remove('active'));

      // Activer le bouton et le contenu cliqué
      button.classList.add('active');
      wrapper.querySelector(`#${button.dataset.target}`).classList.add('active');
    });
  });
});
