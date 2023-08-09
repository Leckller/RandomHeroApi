import './style.css'

const urlBase = 'https://akabab.github.io/superhero-api/api';
const imgHTML = document.querySelector('img');
const h2Name = document.querySelector('h2');
const btn = document.querySelector('button');

function randomNumber() {
  return Math.round(Math.random() * 600);
}


btn.addEventListener('click', (e) => {
  e.preventDefault();
  const randomId = randomNumber();

  fetch(`${urlBase}/all.json`)
    .then((response) => response.json())
    .then((vetor) => {
      const endImg = vetor[randomId].slug;
      imgHTML.src = `${urlBase}/images/md/${endImg}.jpg`;
      h2Name.innerText = vetor[randomId].name;
    })
    .catch((error) => window.alert('error! foi gerado um elemento inválido.'))
})