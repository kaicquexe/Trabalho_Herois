document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const heroCards = document.querySelectorAll('.hero-card');
    const modal = document.getElementById('heroModal');
    const closeModal = document.querySelector('.close');
    const modalTitle = document.getElementById('modalTitle');
    const modalImage = document.getElementById('modalImage');
    const modalDescription = document.getElementById('modalDescription');
    const battleButton = document.getElementById('battleButton');
    const winnerModal = document.getElementById('winnerModal');
    const closeWinnerModal = winnerModal.querySelector('.close');
    const winnerTitle = document.getElementById('winnerTitle');
    const winnerImage = document.getElementById('winnerImage');
    const winnerDescription = document.getElementById('winnerDescription');
  
    // Filtro de Busca
    searchInput.addEventListener('input', function () {
      const query = this.value.toLowerCase();
      heroCards.forEach(card => {
        const name = card.getAttribute('data-name').toLowerCase();
        card.style.display = name.includes(query) ? '' : 'none';
      });
    });
  
    // Exibir Modal de Herói
    heroCards.forEach(card => {
      card.addEventListener('click', function () {
        this.classList.toggle('selected');
      });
    });
  
    // Iniciar Batalha e Determinar Vencedor
    battleButton.addEventListener('click', () => {
      const selectedHeroes = document.querySelectorAll('.hero-card.selected');
      if (selectedHeroes.length < 2) {
        alert('Selecione pelo menos dois heróis para a batalha.');
        return;
      }
  
      let maxScore = 0;
      let winner = null;
  
      selectedHeroes.forEach(hero => {
        const strength = parseInt(hero.getAttribute('data-strength'));
        const agility = parseInt(hero.getAttribute('data-agility'));
        const intelligence = parseInt(hero.getAttribute('data-intelligence'));
        const totalScore = strength + agility + intelligence;
  
        if (totalScore > maxScore) {
          maxScore = totalScore;
          winner = hero;
        }
      });
  
      if (winner) {
        const title = winner.querySelector('h2').textContent;
        const imgSrc = winner.querySelector('img').src;
        const description = winner.querySelector('p').textContent;
  
        winnerTitle.textContent = title;
        winnerImage.src = imgSrc;
        winnerDescription.textContent = description;
        winnerModal.style.display = 'block';
      }
    });
  
    // Fechar Modal
    closeWinnerModal.addEventListener('click', () => {
      winnerModal.style.display = 'none';
    });
  
    window.addEventListener('click', (event) => {
      if (event.target === winnerModal) {
        winnerModal.style.display = 'none';
      }
    });
  });
  