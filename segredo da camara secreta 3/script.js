function choosePath(choice) {
    const story = document.getElementById('story');
    const choices = document.getElementById('choices');
  
    if (choice === 'entrar') {
      story.innerHTML = `
        Você abre a porta e encontra uma sala iluminada por tochas antigas. 
        No centro, há um baú dourado. Ao abrir o baú, você descobre o segredo da câmara: 
        um mapa para um tesouro ainda maior! Parabéns, sua coragem foi recompensada!
      `;
    } else if (choice === 'fugir') {
      story.innerHTML = `
        Você decide fugir da câmara, mas enquanto corre, tropeça e cai. 
        Ao olhar para trás, percebe que perdeu a chance de desvendar o segredo. 
        Talvez você devesse ter sido mais corajoso...
      `;
    }
  
    // Remove os botões após a escolha
    choices.innerHTML = '';
  }