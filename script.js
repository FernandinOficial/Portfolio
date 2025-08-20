
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
    loader.style.display = "none";
    content.style.display = "block";
  }, 1200);
});




// Função de sair da página e falar para voltar // 
function changeTitle(title) {
    document.title = title;
  }
  
  // Armazena o título original da página
  var originalTitle = document.title;
  
  // Adiciona um ouvinte para o evento "blur" na janela
  window.addEventListener('blur', function() {
    changeTitle('Volte aqui  ;(');
  });
  
  // Adiciona um ouvinte para o evento "focus" na janela
  window.addEventListener('focus', function() {
    changeTitle(originalTitle);
  });
  
  // Adiciona um ouvinte para o evento "beforeunload" na janela
  window.addEventListener('beforeunload', function() {
    changeTitle('| Carregando |');
    return null;
  });
  
// Função de sair da página e falar para voltar // 

// Tema claro/escuro usando o switch (checkbox)
const themeCheckbox = document.getElementById('theme-checkbox');
if (themeCheckbox) {
  const root = document.documentElement;
  const stored = localStorage.getItem('theme');
  if (stored === 'light') {
    root.classList.add('light');
    themeCheckbox.checked = true;
  }
  themeCheckbox.addEventListener('change', (e) => {
    const isLight = e.target.checked;
    root.classList.toggle('light', isLight);
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  });
}

// ano do rodapé
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();