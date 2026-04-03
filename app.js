// ===== ELEMENTOS =====
const form = document.getElementById('form');
const lista = document.getElementById('lista');

// ===== DADOS =====
let entradas = JSON.parse(localStorage.getItem('entradas')) || [];

// ===== SALVAR =====
function salvar() {
  localStorage.setItem('entradas', JSON.stringify(entradas));
}

// ===== RENDERIZAR =====
function renderizar() {
  lista.innerHTML = '';

  entradas.forEach((item, index) => {
    const li = document.createElement('li');

    li.innerHTML = `
      <strong>${item.titulo}</strong><br>
      ${item.descricao}<br>
      <small>${item.data}</small>
      <br>
      <button class="delete">Remover</button>
    `;

    li.querySelector('.delete').onclick = () => {
      entradas.splice(index, 1);
      salvar();
      renderizar();
    };

    lista.appendChild(li);
  });
}

// ===== ADICIONAR ENTRADA =====
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const titulo = document.getElementById('titulo').value;
  const descricao = document.getElementById('descricao').value;
  const data = document.getElementById('data').value;

  entradas.push({ titulo, descricao, data });

  salvar();
  renderizar();
  form.reset();
});

// ===== INICIAR =====
renderizar();

// ===== SERVICE WORKER =====
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js')
      .then(() => console.log('Service Worker registrado'))
      .catch(err => console.log('Erro SW:', err));
  });
}

// ===== INSTALAÇÃO PWA =====
let deferredPrompt;
let installBtn = null;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;

  // evita botão duplicado
  if (!installBtn) {
    installBtn = document.createElement('button');
    installBtn.textContent = 'Instalar App';

    // estilo do botão
    installBtn.style.position = 'fixed';
    installBtn.style.bottom = '20px';
    installBtn.style.left = '50%';
    installBtn.style.transform = 'translateX(-50%)';
    installBtn.style.padding = '12px 20px';
    installBtn.style.borderRadius = '10px';
    installBtn.style.border = 'none';
    installBtn.style.background = '#3b82f6';
    installBtn.style.color = '#fff';
    installBtn.style.cursor = 'pointer';
    installBtn.style.zIndex = '1000';

    document.body.appendChild(installBtn);

    installBtn.addEventListener('click', async () => {
      deferredPrompt.prompt();

      const { outcome } = await deferredPrompt.userChoice;
      console.log('Resultado:', outcome);

      deferredPrompt = null;

      // remove botão depois
      installBtn.remove();
      installBtn = null;
    });
  }
});

// remove botão se já instalou
window.addEventListener('appinstalled', () => {
  if (installBtn) {
    installBtn.remove();
    installBtn = null;
  }
});