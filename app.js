const form = document.getElementById('form');
const lista = document.getElementById('lista');

let entradas = JSON.parse(localStorage.getItem('entradas')) || [];

function salvar() {
  localStorage.setItem('entradas', JSON.stringify(entradas));
}

function renderizar() {
  lista.innerHTML = '';

  entradas.forEach((item, index) => {
    const li = document.createElement('li');

    li.innerHTML = `
      <strong>${item.titulo}</strong><br>
      ${item.descricao}<br>
      <small>${item.data}</small><br>
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

renderizar();

// SERVICE WORKER
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js');
  });
}

// INSTALAÇÃO PWA (BOTÃO ÚNICO)
let deferredPrompt;
let installBtn = null;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;

  if (!installBtn) {
    installBtn = document.createElement('button');
    installBtn.textContent = 'Instalar App';

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

    document.body.appendChild(installBtn);

    installBtn.addEventListener('click', async () => {
      deferredPrompt.prompt();
      await deferredPrompt.userChoice;

      installBtn.remove();
      installBtn = null;
    });
  }
});

window.addEventListener('appinstalled', () => {
  if (installBtn) installBtn.remove();
});