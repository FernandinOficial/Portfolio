
window.addEventListener("load", function() {
  const loader = document.getElementById("loader");
  const content = document.getElementById("content");

  // Adiciona classes para a animação de carregamento
  loader.classList.add("dots-container");
  for (let i = 0; i < 3; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    loader.appendChild(dot);
  }

  setTimeout(function() {
    loader.style.display = "none"; // Esconde o loader
    content.style.display = "block"; // Exibe o conteúdo
  }, 4000); // Tempo de espera em milissegundos (4 segundos neste exemplo)
});




// Função de sair da página e falar para voltar // 
function changeTitle(title) {
    document.title = title;
  }
  
  // Armazena o título original da página
  var originalTitle = document.title;
  
  // Adiciona um ouvinte para o evento "blur" na janela
  window.addEventListener('blur', function() {
    changeTitle('Volte aqui  ;('); // Altera o título quando a janela perde o foco
  });
  
  // Adiciona um ouvinte para o evento "focus" na janela
  window.addEventListener('focus', function() {
    changeTitle(originalTitle); // Restaura o título original quando a janela recupera o foco
  });
  
  // Adiciona um ouvinte para o evento "beforeunload" na janela
  window.addEventListener('beforeunload', function() {
    changeTitle('| Carregando |'); // Altera o título antes de sair
    return null;
  });
  
// Função de sair da página e falar para voltar // 