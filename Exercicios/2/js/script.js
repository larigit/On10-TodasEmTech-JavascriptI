
//Para o apartamento de 2 dormitórios
document.getElementById('btnAptoDoisDorm').addEventListener('click', () => {
  document.getElementById('precoAptoDoisDorm').innerText = 'Preço do imóvel: R$ 500.000,00';
});

//Para o apartamento de 3 dormitorios
function mostraPrecoAptoTresDorm() {
  document.getElementById('precoAptoTresDorm').innerText = 'Preço do imóvel: R$ 600.000,00';
};